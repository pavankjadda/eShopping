package com.pj.springsecurity.insertdata;

import com.pj.springsecurity.model.order.OrderStatus;
import com.pj.springsecurity.model.user.Address;
import com.pj.springsecurity.model.user.AddressType;
import com.pj.springsecurity.model.user.UserProfile;
import com.pj.springsecurity.repo.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.Instant;
import java.util.Collections;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles(value = "dev")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class InsertOrderDetailDataTest
{
    @Autowired
    private AddressTypeRepository addressTypeRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private OrderStatusRepository orderStatusRepository;


    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CityRepository cityRepository;



    @Before
    public void setUp()
    {

    }

    @Test
    public void insertAddressType()
    {
        AddressType addressType=new AddressType();
        addressType.setType("Home");
        addressType.setCreatedBy("admin");
        addressType.setLastModifiedBy("admin");
        addressType.setCreatedDate(Instant.now());
        addressType.setLastModifiedDate(Instant.now());
        addressTypeRepository.saveAndFlush(addressType);

        addressType=new AddressType();
        addressType.setType("Business");
        addressType.setCreatedBy("admin");
        addressType.setLastModifiedBy("admin");
        addressType.setCreatedDate(Instant.now());
        addressType.setLastModifiedDate(Instant.now());
        addressTypeRepository.saveAndFlush(addressType);

        addressType=new AddressType();
        addressType.setType("Work");
        addressType.setCreatedBy("admin");
        addressType.setLastModifiedBy("admin");
        addressType.setCreatedDate(Instant.now());
        addressType.setLastModifiedDate(Instant.now());
        addressTypeRepository.saveAndFlush(addressType);
    }

    @Test
    public void insertAddress()
    {
        Address address=new Address();
        address.setStreetName("3130 FAIRVIEW PARK DR");
        address.setApartment("STE 350");
        address.setCity(cityRepository.findByName("Falls Church").get());
        address.setState(stateRepository.findByName("Virginia").get());
        address.setCountry(countryRepository.findByName("United States").get());
        address.setZipCode("22042");
        address.setAddressType(addressTypeRepository.findAddressTypeByType("Home").get());
        address.setCreatedBy("admin");
        address.setLastModifiedBy("admin");
        address.setCreatedDate(Instant.now());
        address.setLastModifiedDate(Instant.now());
        addressRepository.saveAndFlush(address);

        address.setStreetName("3130 FAIRVIEW PARK DR");
        address.setApartment("STE 350");
        address.setCity(cityRepository.findByName("Falls Church").get());
        address.setState(stateRepository.findByName("Virginia").get());
        address.setCountry(countryRepository.findByName("United States").get());
        address.setZipCode("22042");
        address.setAddressType(addressTypeRepository.findAddressTypeByType("Business").get());
        address.setCreatedBy("admin");
        address.setLastModifiedBy("admin");
        address.setCreatedDate(Instant.now());
        address.setLastModifiedDate(Instant.now());
        addressRepository.saveAndFlush(address);

    }

    @Test
    public void insertUserProfile()
    {
        UserProfile userProfile=new UserProfile();
        userProfile.setFirstName("Admin");
        userProfile.setLastName("Admin");
        userProfile.setAddresses(Collections.singletonList(addressRepository.findById(1L).get()));
        userProfile.setEmail("admin@gmail.com");
        userProfile.setUser(userRepository.findByUsername("admin"));
        userProfile.setCreatedBy("admin");
        userProfile.setLastModifiedBy("admin");
        userProfile.setCreatedDate(Instant.now());
        userProfile.setLastModifiedDate(Instant.now());

        userProfileRepository.saveAndFlush(userProfile);
    }

    @Test
    public void insertOrderStatus()
    {
        OrderStatus orderStatus=new OrderStatus();
        orderStatus.setStatus("Created");
        orderStatus.setCreatedBy("admin");
        orderStatus.setLastModifiedBy("admin");
        orderStatus.setCreatedDate(Instant.now());
        orderStatus.setLastModifiedDate(Instant.now());

        orderStatusRepository.saveAndFlush(orderStatus);
    }



}
