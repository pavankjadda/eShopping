
<!-- Insert Data into Category Table -->
INSERT INTO `springtesting`.`category`(`id`,`name`) VALUES('1004','Books');




<!-- Insert Data into Product Table -->
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1001','iPhoneX',1003);
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1002','GalaxyS10',1003);
INSERT INTO `springtesting`.`product`(`id`,`name`,`category_id`) VALUES('p1003','Google Pixel',1003);



<!-- Insert Data into User Table -->
INSERT INTO `springtesting`.`user`(`id`,`address`,`email`,`first_name`,`last_name`) VALUES('user1001','3490 Mnd Dr','jdoe@gma.com','John','Doe');
INSERT INTO `springtesting`.`user`(`id`,`address`,`email`,`first_name`,`last_name`) VALUES('user1002','433 Daek Dr','jreacher@gma.com','Jack','Reacher');


<!-- Insert Data into Order Detail Table -->
INSERT INTO `springtesting`.`order_detail`(`id`,`purchased_by`) VALUES('ORD1001','user1001');


<!-- Insert Data into Order Detail Products Table -->
INSERT INTO `springtesting`.`order_detail_productlist`(`order_detail_id`,`productlist_id`) VALUES('ord1001','p1001');
