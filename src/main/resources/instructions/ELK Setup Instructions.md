1. Download [Elastic Search](https://www.elastic.co/downloads/elasticsearch) and unzip it
2. Start Elastic search with the following command and go to URL [http://localhost:9200](http://localhost:9200)
```
$ bin/elasticsearch
```
3. Download [LogStash](https://www.elastic.co/downloads/logstash) and unzip it
4. Create `logstash-elk.conf` file on logstash home directory with the following content and change the log file location and index name based on your settings
```
input {
    file {
        path => "/Users/pjadda/ELK-Stack/logback/*.log"
        codec => "json"
        type => "logback"
    }
}
 
output {
    if [type]=="logback" {
         elasticsearch {
             hosts => [ "localhost:9200" ]
             index => "logstash"
        }
    }
}

```

5. Start the logstash with the command
```
$ bin/logstash -f logstash-elk.conf
```
6. Download [Kibana](https://www.elastic.co/downloads/kibana) then unzip it, run it with the following command 
```
bin/kibana
```
7. Go to [http://localhost:5601](http://localhost:5601) to see Kibana UI
8. Go to Spring Boot `application.yml` file and add logging file location oproperties
```
# Logging
logging:
  file: /Users/pjadda/ELK-Stack/logback/springsecuritydata.log
```
9. Restart the Spring Boot application to capture logs in the newly created file `springsecuritydata.log`
10. Go to Kibana UI -> Management -> Create Index pattern -> Type index name (You should see the index name below)
11. Go to Kibana UI  -> Dashboard to see Spring Boot log data, modify the filter to see data from past
