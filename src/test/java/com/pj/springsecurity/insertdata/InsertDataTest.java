package com.pj.springsecurity.insertdata;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hazelcast.config.Config;
import com.hazelcast.core.Hazelcast;
import com.pj.springsecurity.model.tax.TaxRate;
import com.pj.springsecurity.model.user.City;
import com.pj.springsecurity.model.user.Country;
import com.pj.springsecurity.model.user.Region;
import com.pj.springsecurity.model.user.State;
import com.pj.springsecurity.repo.*;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles(value = "dev")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class InsertDataTest
{
    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private RegionRepository regionRepository;

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private TaxRateRepository taxRateRepository;

    @Autowired
    static Config config;

    @BeforeClass
    public static void onlyOnce()
    {
        Hazelcast.newHazelcastInstance(config);
    }

    @Before
    public void setUp()
    {

    }

    @Test
    //insertTaxRates
    public void test4()
    {
        try
        {
            File file = new ClassPathResource("data/us-states-tax-rate.json").getFile();
            String jsonString=Files.readString(Paths.get(file.getAbsolutePath()));

            ObjectMapper objectMapper = new ObjectMapper();
            ArrayList taxRatesList=objectMapper.readValue(jsonString, ArrayList.class);
            Map<String,Double> taxRatesMap=new HashMap<>();

            taxRatesList.forEach(taxRateObject ->
            {
                System.out.println(taxRateObject.toString());
                String stateName= String.valueOf(((LinkedHashMap) taxRateObject).get("state")).toLowerCase();
                Double taxRate= Double.valueOf(String.valueOf(((LinkedHashMap) taxRateObject).get("tax_rate")));
                taxRatesMap.put(stateName,taxRate);
            });

            stateRepository.findAll().forEach(state ->
            {
                TaxRate taxRate=new TaxRate();
                taxRate.setRate(taxRatesMap.get(state.getName().toLowerCase()));
                taxRate.setState(state);
                taxRate.setCreatedBy("admin");
                taxRate.setLastModifiedBy("admin");
                taxRate.setCreatedDate(LocalDateTime.now());
                taxRate.setLastModifiedDate(LocalDateTime.now());
                taxRateRepository.save(taxRate);
            });
        }
        catch (Exception e)
        {
            System.out.println("Exception Occurred: "+e.getMessage());
        }

    }


    @Test
    //insertCountryData
    public void test1()
    {
        try
        {
            String[] isoCountries = Locale.getISOCountries();
            List<Country> countryList = new ArrayList<>();
            for (String isoCountryCode : isoCountries)
            {
                Locale locale = new Locale("", isoCountryCode);
                String countryCode = locale.getCountry();
                String countryIsoCode = locale.getISO3Country();
                String countryName = locale.getDisplayName();
                Country country = new Country(countryName, countryCode, countryIsoCode, findRegion("NA"));
                countryList.add(country);
            }
            countryRepository.saveAll(countryList);
            countryRepository.flush();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

    }


    @Test
    //insertStateData
    public void test2() throws IOException
    {
        Map<String, String> statesMap = new HashMap<>();
        readStatesDataFromJsonFile(statesMap);
        for (Map.Entry<String, String> e : statesMap.entrySet())
        {
            stateRepository.saveAndFlush(new State(e.getValue(), e.getKey(), findCountry("United States")));
        }
    }


    @Test
    //insertCitiesData
    public void test3() throws IOException
    {
        HashMap<String, List<String>> citiesMap = new HashMap<>();
        citiesMap = readCitiesDataFromJsonFile(); //Ignore this message
        List<City> cityList = new ArrayList<>();

        for (HashMap.Entry<String, List<String>> mapEntry : citiesMap.entrySet())
        {
            State state = findState(mapEntry.getKey());
            List<String> citiesInState = mapEntry.getValue();

            for (String cityName : citiesInState)
            {
                try
                {
                    //City city = cityRepository.findByNameAndNameIsNotNull(cityName).get(0);
                    City city=new City();
                    city.setState(state);
                    city.setName(cityName);
                    cityList.add(city);

                    //Check if City name exists in Database
                    //if(!cityRepository.findByNameAndState(cityName,state).isPresent())
                    //cityList.add(new City(cityName, state));
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                }
            }

        }
        cityRepository.saveAll(cityList);
        cityRepository.flush(); //Flush changes to DB
    }

    private State findState(String stateName)
    {
        return stateRepository.findByName(stateName).orElse(null);
    }

    public HashMap readCitiesDataFromJsonFile() throws IOException
    {
        File file = new ClassPathResource("data/citis-data.json").getFile();
        byte[] mapByteData = Files.readAllBytes(Paths.get(file.getAbsolutePath()));

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(mapByteData, HashMap.class);
    }


    public void readStatesDataFromJsonFile(Map<String, String> statesMap) throws IOException
    {
        File file = new ClassPathResource("data/us-states-data.json").getFile();
        byte[] mapByteData = Files.readAllBytes(Paths.get(file.getAbsolutePath()));

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(mapByteData);
        for (int i = 0; i < rootNode.size(); i++)
        {
            statesMap.put(rootNode.get(i).get("abbreviation").textValue(), rootNode.get(i).get("name").textValue());
        }
    }

    private Region findRegion(String region)
    {
        return regionRepository.findByName(region).orElse(null);
    }


    private Country findCountry(String countryName)
    {
        return countryRepository.findByName(countryName).orElse(null);
    }

}
