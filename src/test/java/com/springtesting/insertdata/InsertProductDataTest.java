package com.springtesting.insertdata;

import com.springtesting.model.order.Currency;
import com.springtesting.model.order.OrderDetailProduct;
import com.springtesting.model.product.Price;
import com.springtesting.model.product.Product;
import com.springtesting.model.product.ProductPrice;
import com.springtesting.repo.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.Instant;

@RunWith(SpringRunner.class)
@DataJpaTest
@ActiveProfiles(value = "integrationtest")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class InsertProductDataTest
{
    @Autowired
    private PriceRepository priceRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CurrencyRepository currencyRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductPriceRepository productPriceRepository;

    @Autowired
    private OrderDetailProductRepository orderDetailProductRepository;

    @Test
    public void insertCurrency()
    {
        Currency currency=new Currency();
        currency.setSymbol("$");
        currency.setName("US Dollar");
        currency.setIsoCode("USD");

        currency.setCreatedBy("admin");
        currency.setLastModifiedBy("admin");
        currency.setCreatedDate(Instant.now());
        currency.setLastModifiedDate(Instant.now());

        currencyRepository.saveAndFlush(currency);
    }

    @Test
    public void insertPrice()
    {
        Price price=new Price();
        price.setAmount(20.99);
        price.setCurrency(currencyRepository.findById(1L).get());

        price.setCreatedBy("admin");
        price.setLastModifiedBy("admin");
        price.setCreatedDate(Instant.now());
        price.setLastModifiedDate(Instant.now());

        priceRepository.saveAndFlush(price);
    }

    @Test
    public void insertProduct()
    {
        Product product=new Product();
        product.setCategory(categoryRepository.findById(7L).get());
        product.setName("iPhone X");
        //product.setPriceList(Collections.singletonList(priceRepository.findById(1L).get()));

        product.setCreatedBy("admin");
        product.setLastModifiedBy("admin");
        product.setCreatedDate(Instant.now());
        product.setLastModifiedDate(Instant.now());

        productRepository.saveAndFlush(product);
    }

    @Test
    public void insertProductPrice()
    {
        ProductPrice productPrice=new ProductPrice();
        productPrice.setPriceId(1L);
        productPrice.setProductId(1L);

        productPrice.setCreatedBy("admin");
        productPrice.setLastModifiedBy("admin");
        productPrice.setCreatedDate(Instant.now());
        productPrice.setLastModifiedDate(Instant.now());

        productPriceRepository.saveAndFlush(productPrice);
    }

    @Test
    public void insertOrderProduct()
    {
        OrderDetailProduct orderDetailProduct=new OrderDetailProduct();
        orderDetailProduct.setOrderDetailId(1L);
        orderDetailProduct.setProductId(1L);

        orderDetailProduct.setCreatedBy("admin");
        orderDetailProduct.setLastModifiedBy("admin");
        orderDetailProduct.setCreatedDate(Instant.now());
        orderDetailProduct.setLastModifiedDate(Instant.now());

        orderDetailProductRepository.saveAndFlush(orderDetailProduct);
    }

}
