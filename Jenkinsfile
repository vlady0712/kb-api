pipeline {
    agent { label JOB_NAME }
    tools {nodejs "nodejs-jenkins"}

    environment {
        root_path_api = "/var/www/${base_url}/api"
        env_directory = "$root_path_api/environment/${env_name}"
    }
    stages {
        stage('build Strapi') {
            steps {
               sh '''
               #!/bin/bash
               rm -r $root_path_api
               cp -r . $root_path_api
               cd $root_path_api
               npm i
               cp ${env_name} .env
               pm2 reload ${base_url}-ecosystem.config.js --update-env
               '''
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
} 

