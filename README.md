Master: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=master)](https://travis-ci.com/pavankjadda/eShopping)

Development: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=development)](https://travis-ci.com/pavankjadda/eShopping)

# eShopping Application

## What's this?
eShopping Application implemented with Spring Boot, Spring Security, Spring Data and Spring Session

## How to Run?
1. Create database named **spring_security_data** on Mysql or MariaDb
2. Import the project on IntelliJ and Run it. It will create all the tables required. Stop the project
3. Execute steps 3,4 and 5 in same order. Go to [User Data Sql Commands.txt](https://raw.githubusercontent.com/pavankjadda/SpringSecurity-SpringData/master/src/main/resources/data/User%20Data%20SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
4. Go to [Insert Country State CityTaxRate Data.txt](https://raw.githubusercontent.com/pavankjadda/SpringSecurity-SpringData/master/src/main/resources/data/Insert%20Country%20State%20CityTaxRate%20Data.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
5. Go to [Insert Category, Manufacturer, Product Data SqlCommands.txt](https://raw.githubusercontent.com/pavankjadda/SpringSecurity-SpringData/master/src/main/resources/data/Insert%20Category%2C%20Manufacturer%2C%20Product%20Data%20SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
6. Run the project again and go to http://localhost:8080/api/v2/category/list and enter username and password
7. If step 6 does not work, go to BCrypt online tools like https://www.browserling.com/tools/bcrypt and enter your admin password and select rounds: 12 and copy generated encrypted password.
8. Go to Mysql workbench and update admin user password with the following SQL statement. Replace **<encrypted password>** with the password created in step 6
   ```
   UPDATE `spring_security_data`.`user` SET `password`=<encrypted password> WHERE `username`='admin';
   ```
9. For better experience go to my Angular8 project [SpringSecurity-SpringData-UI](https://github.com/pavankjadda/SpringSecurity-SpringData-UI) and run it see nice UI

## Technologies 
1. Java 11
2. Spring Boot and listed Spring modules 
    - Spring Data JPA
    - Spring Security 
    - Spring AOP
    - Spring Session
    - Spring Cache
3. Logback and ELK Stack for log management
4. MySQL
