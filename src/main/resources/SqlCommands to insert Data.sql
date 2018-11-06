
/* Insert Data into Category Table */
INSERT INTO `springtesting`.`category`(`id`,`name`) VALUES('1002','Grocessory');
INSERT INTO `springtesting`.`category`(`id`,`name`) VALUES('1003','Electronics');
INSERT INTO `springtesting`.`category`(`id`,`name`) VALUES('1001','Books');




/* Insert Data into Product Table  */
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1001','iPhoneX',1003);
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1002','GalaxyS10',1003);
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1003','Google Pixel',1003);



/* Insert Data into User Table  */
INSERT INTO `springtesting`.`user`(`id`,`address`,`email`,`first_name`,`last_name`) VALUES('1001','3490 Mnd Dr','jdoe@gma.com','John','Doe');
INSERT INTO `springtesting`.`user`(`id`,`address`,`email`,`first_name`,`last_name`) VALUES('1002','433 Daek Dr','jreacher@gma.com','Jack','Reacher');


/* Insert Data into Order Detail Table  */
INSERT INTO `springtesting`.`order_detail`(`id`,`purchased_by`) VALUES('ORD1001','1001');



/* Insert Data into Order Detail Products Table  */
INSERT INTO `springtesting`.`order_detail_productlist`(`id`,`order_detail_id`,`productlist_id`) VALUES(1,'ord1001','p1001');
INSERT INTO `springtesting`.`order_detail_productlist`(`id`,`order_detail_id`,`productlist_id`) VALUES(2,'ord1001','p1002');
INSERT INTO `springtesting`.`order_detail_productlist`(`id`,`order_detail_id`,`productlist_id`) VALUES(3,'ord1001','p1003');
