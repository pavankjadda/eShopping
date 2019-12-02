# This script builds Angular app and moves the dist folder contents to resorces/static/ folder in Spring Boot app. Then maven builds the app and java command starts the combined app

cd /home/ubuntu/SpringSecurity-SpringData-UI
git pull
ng build --prod
rm -rf ../SpringSecurity-SpringData/src/main/resources/static/*
cp -rf dist/SpringTestingUI/* ../SpringSecurity-SpringData/src/main/resources/static/

cd /home/ubuntu/SpringSecurity-SpringData
git pull
mvn clean package -DskipTests
sudo java -jar -Dspring.profiles.active=prod target/SpringSecurity-SpringData-*.jar
