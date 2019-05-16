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

## Technologies 
1. Java 8
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
