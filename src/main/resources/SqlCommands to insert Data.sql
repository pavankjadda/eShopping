-- noinspection SqlNoDataSourceInspectionForFile

/* Insert Data into Category Table */
INSERT INTO springsecuritydb.category VALUES('1002','Grocery');
INSERT INTO springsecuritydb.category VALUES('1003','Electronics');
INSERT INTO springsecuritydb.category VALUES('1001','Books');


/* Insert Data into Product Table  */
INSERT INTO springsecuritydb.product VALUES('p1001','iPhoneX',1003);
INSERT INTO springsecuritydb.product VALUES('p1002','GalaxyS10',1003);
INSERT INTO springsecuritydb.product VALUES('p1003','Google Pixel',1003);

/* Insert Data into Order Detail Table  */
INSERT INTO springsecuritydb.order_detail VALUES('ORD1001','1001');

/* Insert Data into Order Detail Products Table  */
INSERT INTO springsecuritydb.order_detail_productlist VALUES(1,'ord1001','p1001');
INSERT INTO springsecuritydb.order_detail_productlist VALUES(2,'ord1001','p1002');
INSERT INTO springsecuritydb.order_detail_productlist VALUES(3,'ord1001','p1003');



/* Insert Data into User Table  */
INSERT INTO springsecuritydb.user VALUES(1,1,1,1,1,'$2a$12$pqcdXB.Xboa7pGNba51YHuWQVhlZM8TVguRUCL2ss8GOwhEqiqwOu','admin');
INSERT INTO springsecuritydb.user VALUES(2,1,1,1,1,'$2a$12$kRstkVGM88bvzGqxcWDX5eVDvT0iy40YPAKMRiKX9D2jIsXmKXOAK','user');


/* Insert Data into Role Table  */
insert into springsecuritydb.role values(1,'ROLE_USER');
insert into springsecuritydb.role values(2,'ROLE_ADMIN');
insert into springsecuritydb.role values(3,'ROLE_APIUSER');
insert into springsecuritydb.role values(4,'ROLE_DBA');
insert into springsecuritydb.role values(5,'ROLE_SELLER');
insert into springsecuritydb.role values(6,'ROLE_BUYER');

/* Insert Data into Privilege Table  */
insert into springsecuritydb.privilege values(1,'READ_PRIVILEGE');
insert into springsecuritydb.privilege values(2,'WRITE_PRIVILEGE');
insert into springsecuritydb.privilege values(3,'DELETE_PRIVILEGE');

/* Insert Data into UserRole Table  */
INSERT INTO `springsecuritydb`.`user_role`(`id`,`user_id`,`role_id`) VALUES (1,2,1);
INSERT INTO `springsecuritydb`.`user_role`(`id`,`user_id`,`role_id`) VALUES (2,1,2);

/* Insert Data into RolePrivilege Table  */
insert into springsecuritydb.role_privilege values(2,1);
insert into springsecuritydb.role_privilege values(2,2);
insert into springsecuritydb.role_privilege values(2,3);
insert into springsecuritydb.role_privilege values(1,1);