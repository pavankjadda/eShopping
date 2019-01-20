-- noinspection SqlNoDataSourceInspectionForFile

/* Insert Data into Category Table */
INSERT INTO springsessiontest.category VALUES(1002,'Grocery');
INSERT INTO springsessiontest.category VALUES(1003,'Electronics');
INSERT INTO springsessiontest.category VALUES(1001,'Books');


/* Insert Data into Product Table  */
INSERT INTO springsessiontest.product VALUES(2001,'iPhoneX',1003);
INSERT INTO springsessiontest.product VALUES(2002,'GalaxyS10',1003);
INSERT INTO springsessiontest.product VALUES(2003,'Google Pixel',1003);

/* Insert Data into Order Detail Table  */
INSERT INTO springsessiontest.order_detail VALUES(1001,1001);

/* Insert Data into Order Detail Products Table  */
INSERT INTO springsessiontest.order_detail_productlist VALUES(1,'ord1001',2001);
INSERT INTO springsessiontest.order_detail_productlist VALUES(2,'ord1001',2002);
INSERT INTO springsessiontest.order_detail_productlist VALUES(3,'ord1001',2003);





/* Insert Data into User Table  */
INSERT INTO springsessiontest.user VALUES(1,1,1,1,1,'$2a$12$pqcdXB.Xboa7pGNba51YHuWQVhlZM8TVguRUCL2ss8GOwhEqiqwOu','admin');
INSERT INTO springsessiontest.user VALUES(2,1,1,1,1,'$2a$12$kRstkVGM88bvzGqxcWDX5eVDvT0iy40YPAKMRiKX9D2jIsXmKXOAK','user');


/* Insert Data into Role Table  */
insert into springsessiontest.role values(1,'ROLE_USER');
insert into springsessiontest.role values(2,'ROLE_ADMIN');
insert into springsessiontest.role values(3,'ROLE_APIUSER');
insert into springsessiontest.role values(4,'ROLE_DBA');
insert into springsessiontest.role values(5,'ROLE_SELLER');
insert into springsessiontest.role values(6,'ROLE_BUYER');


/* Insert Data into Privilege Table  */
insert into springsessiontest.privilege values(1,'READ_PRIVILEGE');
insert into springsessiontest.privilege values(2,'WRITE_PRIVILEGE');
insert into springsessiontest.privilege values(3,'DELETE_PRIVILEGE');

/* Insert Data into UserRole Table  */
INSERT INTO `springsessiontest`.`user_role`(`id`,`user_id`,`role_id`) VALUES (1,2,1);
INSERT INTO `springsessiontest`.`user_role`(`id`,`user_id`,`role_id`) VALUES (2,1,2);

/* Insert Data into RolePrivilege Table  */
insert into springsessiontest.role_privilege values(2,1);
insert into springsessiontest.role_privilege values(2,2);
insert into springsessiontest.role_privilege values(2,3);
insert into springsessiontest.role_privilege values(1,1);