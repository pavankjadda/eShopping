# This script builds Angular app and moves the dist folder contents to resorces/static/ folder in Spring Boot app. Then maven builds the app and java command starts the combined app

# shellcheck disable=SC2164
cd /home/ubuntu/SpringSecurity-SpringData
git pull
mvn clean package -DskipTests
sudo java -jar -Dspring.profiles.active=prod target/SpringSecurity-SpringData-0.0.1-SNAPSHOT.jar
