pipeline {
    agent 
    {
        docker 
        {
            image 'maven:3-alpine'
            args '-v /root/.m2:/root/.m2'
        }
    }
    
    stages 
    {
        stage('Build') 
        {
            steps 
            {
                sh 'echo "Building started, Skipping Tests"'
                sh 'mvn -B -DskipTests clean package'
            }
        }
        stage('Test') 
        {
            steps 
            {
                sh 'echo "Test stage started"'
                sh 'mvn test'
            }
            post {
                    always 
                    {
                        junit 'target/surefire-reports/*.xml'
                    }
                    success 
                    {
                        echo 'This will run only if successful'
                    }
                    failure 
                    {
                        echo 'This will run only if failed'
                    }
                    unstable 
                    {
                        echo 'This will run only if the run was marked as unstable'
                    }
                    changed 
                    {
                        echo 'This will run only if the state of the Pipeline has changed'
                        echo 'For example, if the Pipeline was previously failing but is now successful'
                    }
            }
        }
        
        
        stage('Deliver') 
        { 
            steps 
            {
                timeout(time: 3, unit: 'MINUTES') 
                {
                    sh 'echo "Deliver stage started"'
                    sh './jenkins/scripts/deliver.sh' 
                    sh 'echo "Deliver stage Ended. Deployment successful"'
                    sh './health-check.sh'
                }
                
            }
            
        }
    }
}
