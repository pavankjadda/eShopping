package com.springtesting.mockito;

import com.springtesting.model.*;
import com.springtesting.repo.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Collections;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles(value = "integrationtest")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class InsertOrderDetailDataTest
{
    @Autowired
    private AddressTypeRepository addressTypeRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private OrderStatusRepository orderStatusRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

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

    @Test
    public void insertOrderDetail()
    {
        OrderDetail orderDetail=new OrderDetail();
        orderDetail.setId(1L);
        orderDetail.setOrderCreatedDateTime(LocalDateTime.now());
        orderDetail.setOrderStatus(orderStatusRepository.findByStatus("Created"));
        orderDetail.setPurchasedBy(userProfileRepository.findById(1L).get());
        orderDetail.setShippingAddress(addressRepository.findById(1L).get());

        orderDetail.setCreatedBy("admin");
        orderDetail.setLastModifiedBy("admin");
        orderDetail.setCreatedDate(Instant.now());
        orderDetail.setLastModifiedDate(Instant.now());

        orderDetailRepository.saveAndFlush(orderDetail);

    }


}
