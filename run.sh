cd /home/ubuntu/SpringSecurity-SpringData-UI
ng build --prod
cp -rf dist/SpringTestingUI/* ../SpringSecurity-SpringData/src/main/resources/static/
mvn clean package -DskipTests
sudo java -jar -Dspring.profiles.active=prod target/SpringSecurity-SpringData-0.0.1-SNAPSHOT.jar
