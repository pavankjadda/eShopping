### Use JDK 11 JRE image
FROM openjdk:11-jre-buster

### Copy JAR file to app.jar
COPY target/*.jar app.jar

### Start Spring Boot application using environment variables
ENTRYPOINT ["java","-jar","-Ddb.username=${DB_USERNAME}","-Ddb.password=${DB_PASSWORD}","-Dspring.profiles.active=${ACTIVE_PROFILE}","/app.jar"]
