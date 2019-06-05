
/* Insert Data into Address Type Table  */
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20001,'Home');
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20002,'Business');
INSERT INTO `spring_security_data`.`address_type`(`id`,`type`) VALUES(20003,'Work');


INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20001,'Home');
INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20002,'Business');
INSERT INTO `spring_security_data`.`manufacturer_address_type`(`id`,`type`) VALUES(20003,'Work');


/* Insert Data into Currency  Table  */

INSERT INTO `spring_security_data`.`currency`(`id`,`iso_code`,`name`,`symbol`) VALUES(1,'USD','USD','$');


/*

   Execute InsertDataTest class test cases to insert Countries, States, City and Tax Rates data

*/

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
