Master: [![Build Status](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData.svg?branch=master)](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData)

Development: [![Build Status](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData.svg?branch=development)](https://travis-ci.com/pavankjadda/SpringSecurity-SpringData)

# eShopping Application

## What's this?
eShopping Application implemented with Spring Boot, Spring Security, Spring Data and Spring Session
1. Register new user
2. Login with credentials and persist session between calls until user closes browser
3. Implement 'Remember Me' checkbox and provide session management between sessions (Show homepage or requested page despite closing the browser)
4. Enrypt the password in database and store credentials in MySql Database
5. Restrict users from accessing orders, products without authentication
6. Deal with invalidating session, authorized user trying to authenticate again etc. 
7. Provide role management and restrict users from accessing unauthorized content i.e. Users trying to access Admin data
8. Provide Stateless authentication for atleast one REST API

## How to Run?
1. Create database named 'spring_security_data' on Mysql or MariaDb
2. Import the project on IntelliJ and Run it. It will create all the tables required. Stop the project
3. Go to [User Data Sql Commands](https://github.com/pavankjadda/SpringSecurity-SpringData/blob/master/src/main/resources/data/User%20Data%20SqlCommands.sql) and copy all the commands and execute them in to Mysql Workbench or MySql shell
4. Repeat similar steps fpr [](https://raw.githubusercontent.com/pavankjadda/SpringSecurity-SpringData/master/src/main/resources/data/Core%20Data%20SqlCommands.sql)
5. Go to [Test Class](https://github.com/pavankjadda/SpringSecurity-SpringData/blob/master/src/test/java/com/pj/springsecurity/insertdata/InsertDataTest.java) and execute the following test cases in order
    * insertCountryData()
    * insertStateData()
    * insertCitiesData()
6. Run the project again

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
