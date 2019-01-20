# Spring Security implementation with Spring Session, Spring Data and Spring Boot

Spring Security implementation with Spring Session, Spring Data and Spring Boot. Following usecases covered
1. Register new user
2. Login with credentials and persist session between calls until user closes browser
3. Implement 'Remember Me' checkbox and provide session management between sessions (Show homepage or requested page despite closing the browser)
4. Encrypt the password in database and store credentials in MySql Database
5. Restrict users from accessing orders, products without authentication
6. Deal with invalidating session, authorized user trying to authenticate again etc. 
7. Provide role management and restrict users from accessing unauthorized content i.e. Users trying to access Admin data
8. Provide Stateless authentication for atleast one REST API

## Technologies
### Backend
1. Java 8
2. Spring Boot (2.x), Netflix Eureka, Zuul and Ribbon
3. Spring Data JPA
4. Spring Security
5. Logback (Structured logging)
6. Zipkin, Spring Cloud Sleuth, Splunk and ELK for logging system
7. Spring Config Server for Config
8. Mysql (Included configuration for PostGres deployment)


### Frontend
1. Angular 7.x
2. Bootstrap 4.x
3. CSS3
4. HTML5
