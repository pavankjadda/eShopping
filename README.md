Master: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=master)](https://travis-ci.com/pavankjadda/eShopping)

Development: [![Build Status](https://travis-ci.com/pavankjadda/eShopping.svg?branch=development)](https://travis-ci.com/pavankjadda/eShopping)

# eShopping Application

## What's this?
eShopping Application implemented with Spring Boot, Spring Security, Spring Data and Spring Session

## How to Run?
### Run using docker(preferred)
Make sure docker is up and running on your local machine

1. Download the repo and execute the following commands.
    ```shell script
    $ mvn clean package -DskipTests
      
    $ docker-compose down
      
    $ docker-compose build
      
    $ docker-compose up
    ```
2. These commands will build the eshopping app and run the spring boot app and mysql database as docker containers
3. Connect to MySql docker instance(Use MySql work bench) using the credentials from [docker-compose.yml](docker-compose.yml) file 
4. Now copy all the SQL commands from [src/main/resources/docker/mysql/data.sql](src/main/resources/docker/mysql/data.sql) and  execute them on database
5. That's it you should be able to access the application using the link [http://localhost:8082/api/v1/category/list](http://localhost:8082/api/v1/category/list) and use credentials **admin/admin**  as password  


### Run using IDE
1. Create database named **spring_security_data** on Mysql or MariaDb
2. Import the project on IntelliJ and Run it. It will create all the tables required
3. Execute steps 3,4 and 5 in the same order. Go to [User_Data_SqlCommands.txt](src/main/resources/data/User_Data_SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
4. Go to [Insert_Country_State_City_TaxRate_Data.txt](src/main/resources/data/Insert_Country_State_City_TaxRate_Data.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
5. Go to [Insert_Category_Manufacturer_Product_Data_SqlCommands.txt](src/main/resources/data/Insert_Category_Manufacturer_Product_Data_SqlCommands.txt) and copy all the commands and execute them in to Mysql Workbench or MySql shell
6. Go to http://localhost:8080/api/v2/manufacturer/list and enter admin/admin(username and password) to see list of manufacturers
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
