package com.pj.springsecurity.web.api.user;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pj.springsecurity.model.order.Category;
import com.pj.springsecurity.model.order.Currency;
import com.pj.springsecurity.model.user.City;
import com.pj.springsecurity.model.user.Country;
import com.pj.springsecurity.model.user.Region;
import com.pj.springsecurity.model.user.State;
import com.pj.springsecurity.repo.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping(path = "test")
public class TestController
{
    private final CountryRepository countryRepository;

    private final RegionRepository regionRepository;

    private final StateRepository stateRepository;

    private final CityRepository cityRepository;

    private final CurrencyRepository currencyRepository;

    private final CategoryRepository categoryRepository;

    public TestController(CountryRepository countryRepository, RegionRepository regionRepository, StateRepository stateRepository, CityRepository cityRepository, CurrencyRepository currencyRepository, CategoryRepository categoryRepository)
    {
        this.countryRepository = countryRepository;
        this.regionRepository = regionRepository;
        this.stateRepository = stateRepository;
        this.cityRepository = cityRepository;
        this.currencyRepository = currencyRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping(value = "/insert_category")
    public void insertCategory()
    {
        Category category = new Category();
        category.setId(1001L);
        category.setName("Books");
        category.setCreatedBy("Pavan");
        category.setCreatedDate(LocalDateTime.now());
        categoryRepository.saveAndFlush(category);
    }

    @GetMapping(value = "/insert_currency")
    public void insertCurrency()
    {
        com.pj.springsecurity.model.order.Currency currency = new Currency();
        currency.setIsoCode("USD");
        currency.setName("USD");
        currency.setSymbol("$");
        currencyRepository.saveAndFlush(currency);
    }

    @GetMapping(value = "/insert_countries")
    public void insertCountryData()
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


    @GetMapping(value = "/insert_states")
    public void insertStateData() throws IOException
    {
        Map<String, String> statesMap = new HashMap<>();
        readStatesDataFromJsonFile(statesMap);
        for (Map.Entry<String, String> e : statesMap.entrySet())
        {
            stateRepository.saveAndFlush(new State(e.getValue(), e.getKey(), findCountry("United States")));
        }
    }


    @GetMapping(value = "/insert_cities")
    public void insertCitiesData() throws IOException
    {
        HashMap<String, List<String>> citiesMap = new HashMap<>();
        citiesMap = readCitiesDataFromJsonFile(citiesMap); //Ignore this message
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

    public HashMap readCitiesDataFromJsonFile(HashMap citiesMap) throws IOException
    {
        File file = new ClassPathResource("data/citis-data.json").getFile();
        byte[] mapByteData = Files.readAllBytes(Paths.get(file.getAbsolutePath()));

        ObjectMapper objectMapper = new ObjectMapper();
        citiesMap = objectMapper.readValue(mapByteData, HashMap.class);
        return citiesMap;
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
