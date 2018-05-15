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
                        mail to: 'testuser3130@outlook.com',
                            subject: "Successful Pipeline: ${currentBuild.fullDisplayName}",
                            body: "See logs at ${env.BUILD_URL}"
                    }
                    failure 
                    {
                        echo 'This will run only if failed'
                        mail to: 'testuser3130@outlook.com',
                            subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                            body: "Something is wrong with ${env.BUILD_URL}"
                        
                    }
                    unstable 
                    {
                        echo 'This will run only if the run was marked as unstable'
                        mail to: 'testuser3130@outlook.com',
                            subject: "Unstable Pipeline: ${currentBuild.fullDisplayName}",
                            body: "Something is wrong with ${env.BUILD_URL}"
                    }
                    changed 
                    {
                        echo 'This will run only if the state of the Pipeline has changed'
                        echo 'For example, if the Pipeline was previously failing but is now successful'
                        mail to: 'testuser3130@outlook.com',
                            subject: "Changed Pipeline: ${currentBuild.fullDisplayName}",
                            body: "Something is wrong with ${env.BUILD_URL}"
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
                    mail to: 'testuser3130@outlook.com',
                            subject: "Deployed Pipeline: ${currentBuild.fullDisplayName}",
                            body:  "Deployed Pipeline: ${currentBuild.fullDisplayName} and see full report here ${env.BUILD_URL}""
                }
                
            }
            
        }
    }
}
