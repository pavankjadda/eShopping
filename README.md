Master: [![Build Status](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData.svg?branch=master)](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData)

Development: [![Build Status](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData.svg?branch=development)](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData)

# eShopping Application

## What's this?
eShopping Application implemented with Spring Boot, Spring Security, Spring Data and Spring Session

## How to Run?
1. Create database named 'spring_security_data' on Mysql or MariaDb
2. Import the project on IntelliJ and Run it. It will create all the tables required. Stop the project
3. Go to [User Data Sql Commands](https://github.com/pavankjadda/SpringSecurity-SpringData/blob/master/src/main/resources/data/User%20Data%20SqlCommands.sql) and copy all the commands and execute them in to Mysql Workbench or MySql shell
4. Repeat similar steps fpr [](https://raw.githubusercontent.com/pavankjadda/SpringSecurity-SpringData/master/src/main/resources/data/Core%20Data%20SqlCommands.sql)
5. Go to [Test Class](https://github.com/pavankjadda/SpringSecurity-SpringData/blob/master/src/test/java/com/pj/springsecurity/insertdata/InsertDataTest.java) and execute the following test cases in order
    * insertCountryData()
    * insertStateData()
    * insertCitiesData()
6. Go to BCrypt online tools like https://www.browserling.com/tools/bcrypt and enter your admin password and select rounds: 12 and copy generated encrypted password. 
7. Go to Mysql workbench and get admin user data through mysql select statement. Update the user password field with new encrypted password you just created
6. Run the project again and go to http://localhost:8080/api/v2/category/list and enter username and password


## Technologies 
1. Java 11
2. Spring Boot and listed Spring modules 
    - Spring Data JPA
    - Spring Security 
    - Spring AOP
    - Spring Session
    - Spring Cache
3. Logback and ELK Stack for log management
4. Bucket4J for rate limiting
5. Jackson for Data binding
6. MySql for database
