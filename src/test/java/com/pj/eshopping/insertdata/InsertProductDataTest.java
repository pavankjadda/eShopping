package com.pj.eshopping.insertdata;

import com.pj.eshopping.domain.order.Currency;
import com.pj.eshopping.domain.product.Price;
import com.pj.eshopping.domain.product.Product;
import com.pj.eshopping.domain.product.ProductPrice;
import com.pj.eshopping.repo.CategoryRepository;
import com.pj.eshopping.repo.CurrencyRepository;
import com.pj.eshopping.repo.PriceRepository;
import com.pj.eshopping.repo.ProductPriceRepository;
import com.pj.eshopping.repo.ProductRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

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



    @Test
    public void insertCurrency()
    {
        Currency currency=new Currency();
        currency.setSymbol("$");
        currency.setName("US Dollar");
        currency.setIsoCode("USD");

        currency.setCreatedBy("admin");
        currency.setLastModifiedBy("admin");
        currency.setCreatedDate(LocalDateTime.now());
        currency.setLastModifiedDate(LocalDateTime.now());

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
        price.setCreatedDate(LocalDateTime.now());
        price.setLastModifiedDate(LocalDateTime.now());

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
        product.setCreatedDate(LocalDateTime.now());
        product.setLastModifiedDate(LocalDateTime.now());

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
        productPrice.setCreatedDate(LocalDateTime.now());
        productPrice.setLastModifiedDate(LocalDateTime.now());

        productPriceRepository.saveAndFlush(productPrice);
    }


}
