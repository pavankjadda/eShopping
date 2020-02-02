Master: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=master)](https://travis-ci.com/pavankjadda/eShopping)

Development: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=development)](https://travis-ci.com/pavankjadda/eShopping)

# eShopping Application

## What's this?
eShopping Application implemented with Spring Boot, Spring Security, Spring Data and Spring Session

## How to Run?
1. Create database named **spring_security_data** on Mysql or MariaDb
2. Import the project on IntelliJ and Run it. It will create all the tables required
3. Execute steps 3,4 and 5 in the same order. Go to [User Data Sql Commands.txt](src/main/resources/data/User%20Data%20SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
4. Go to [Insert Country State CityTaxRate Data.txt](src/main/resources/data/Insert%20Country%20State%20CityTaxRate%20Data.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
5. Go to [Insert Category, Manufacturer, Product Data SqlCommands.txt](src/main/resources/data/Insert%20Category%2C%20Manufacturer%2C%20Product%20Data%20SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
6. Go to http://localhost:8080/api/v2/manufacturer/list and enter admin(username) and admin(password) to see list of manufacturers
7. If the login credentils does not work in step 6, go to BCrypt online tool https://www.browserling.com/tools/bcrypt and enter your admin password and select rounds as 12 and copy generated encrypted password.
8. Go to Mysql workbench and update admin user password with the following SQL statement. Replace **<encrypted password>** with the password created in step 7
   ```
   UPDATE `spring_security_data`.`user` SET `password`=<encrypted password> WHERE `username`='admin';
   ```
9. For better experience go to my Angular9 project [eShopping-UI](https://github.com/pavankjadda/eShopping-UI) and run it see nice UI

## Technologies 
1. Java 11
2. Spring Boot and listed Spring modules 
    - Spring Data JPA
    - Spring Security 
    - Spring AOP
    - Spring Session
    - Spring Cache
4. MySQL
