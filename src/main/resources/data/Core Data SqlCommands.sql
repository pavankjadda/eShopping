/* Insert Data into Currency Table  */

INSERT INTO `spring_security_data`.`currency`(`id`,`iso_code`,`name`,`symbol`) VALUES(1,'USD','USD','$');
/*

   Execute InsertDataTest class test cases to insert Countries, States, City and Tax Rates data

*/

/* Insert Data into Address Type Table  */
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20001,'Home');
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20002,'Business');
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20003,'Work');

/* Insert Data into Address Table  */
INSERT INTO `spring_security_data`.`address` (`id`, `created_by`, `created_date`, `last_modified_by`, `last_modified_date`, `apartment`, `street_name`, `zip_code`, `address_type_id`, `city_id`, `country_id`, `state_id`, `user_profile_id`) VALUES ('1', 'admin', '2019-06-05 17:27:28', 'admin', '2019-06-05 17:27:28', '101', '2226 Mohegan Dr', '22043', '20001', '37495', '482', '82', '1');


/* Insert Manufacturer Address Type*/
INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20001,'Home');
INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20002,'Business');
INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20003,'Work');


/* Insert Manufacturer Address*/
INSERT INTO `spring_security_data`.`manufacturer_address`(`id`,`created_by`,`last_modified_by`,`apartment`,`street_name`,`zip_code`,`city_id`,`country_id`,`manufacturer_address_type_id`,`state_id`) VALUES
(50001,'admin','admin','350','1000 Infinity Loop',66043,(Select city.id from city where city.name='CUPERTINO'),(Select country.id from country where country.name='United States'),20002,(Select state.id from state where state.name='California'));

INSERT INTO `spring_security_data`.`manufacturer_address`
(`id`,`created_by`,`last_modified_by`,`apartment`,`street_name`,`zip_code`,`city_id`,`country_id`,`manufacturer_address_type_id`,`state_id`) VALUES
(50002,'admin','admin','350','1900 Galaxy st',66078,(Select city.id from city where city.name='Los Angeles'),(Select country.id from country where country.name='United States'),20002,(Select state.id from state where state.name='California'));


/* Insert Manufacturer */
INSERT INTO `spring_security_data`.`manufacturer`(`id`,`contact_email`,`description`,`display_name`,`fax`,`name`,`phone`,`address_id`)
VALUES(40001,'contact@apple.com','Apple Inc.','Apple','800-678-9000','Apple','800-783-9001',50001);

INSERT INTO `spring_security_data`.`manufacturer`(`id`,`contact_email`,`description`,`display_name`,`fax`,`name`,`phone`,`address_id`)
VALUES(40002,'contact@samsung.com','Samsung Inc.','Samsung','800-123-1000','Samsung','800-123-1001',50001);


/* Insert Category*/
INSERT INTO `spring_security_data`.`category`(`id`,`description`,`name`)
VALUES(80001,'Cell Phones','Cell Phones');

INSERT INTO `spring_security_data`.`category`(`id`,`description`,`name`)
VALUES(80002,'Books','Books');

INSERT INTO `spring_security_data`.`category`(`id`,`description`,`name`)
VALUES(80003,'Tablets','Tablets');

/* Insert Price*/
INSERT INTO `spring_security_data`.`price`(`id`,`amount`,`currency_id`) VALUES(90001,899.99,1);
INSERT INTO `spring_security_data`.`price`(`id`, `amount`, `currency_id`) VALUES ('90002', '349.99', '1');


/* Insert Product*/
INSERT INTO `spring_security_data`.`product`
(`id`,`description`,`name`,`category_id`,`manufacturer_id`,`price_id`)
VALUES(60001,'iPhone X 64Gb Unlocked','iPhone X 64Gb Unlocked',80001,40001,90001);

INSERT INTO `spring_security_data`.`product`(`id`,`description`,`name`,`category_id`,`manufacturer_id`,`price_id`)
VALUES(60002,'iPad WiFi 64Gb','iPad WiFi 64Gb ',80003,40001,90002);

/* Insert Product Prices*/
INSERT INTO `spring_security_data`.`product_price` (`id`, `price_id`, `product_id`) VALUES ('1', '90001', '60001');
INSERT INTO `spring_security_data`.`product_price` (`id`, `price_id`, `product_id`) VALUES ('2', '90002', '60002');

/* Insert Product Inventory*/
INSERT INTO `spring_security_data`.`product_inventory` (`id`, `quantity`, `product_id`) VALUES ('110001', '1000', '60001');
INSERT INTO `spring_security_data`.`product_inventory` (`id`, `quantity`, `product_id`) VALUES ('110002', '300', '60002');
