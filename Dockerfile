# Use JDK 11 JRE image
FROM openjdk:11-jre-buster

# Copy JAR file to app.jar
COPY target/*.jar app.jar

# Start Spring Boot application using environment variables
ENTRYPOINT ["java","-jar","-Ddb.url=${DB_URL}","-Ddb.username=${DB_USERNAME}","-Ddb.password=${DB_PASSWORD}","-Dspring.profiles.active=${ACTIVE_PROFILE}","/app.jar"]


############
# docker run -e DB_USERNAME=root -e DB_PASSWORD='bcmc1234' -e DB_URL='jdbc:mysql://localhost:3306/spring_security_data?serverTimezone=UTC' -e ACTIVE_PROFILE=dev <image_name>
# docker run -e MYSQL_ROOT_PASSWORD='bcmc1234' mysql
