# Ethereum - Ropsten Test Network (Tokens Distribution from one account to different accounts)


## Introduction

We are transfering Ethereum ERC20 token on the Ropsten testnet and providing a code-based mechanism to perform basic token distributions from contract owner account to different accounts. 

##Features
1. Online Ticket Booking
2. Easy to signup / signin
3. View Account Details
4. View Your Tickets
5. Change Travel Date
6. Delete Ticket


##Requirements

    express: "^4.17.1"
    web3: "^1.3.0"
    big-number: "^2.0.0",
    big-numbers: "^0.1.4",
    bignumber.js: "^9.0.1",
   

## Installation

**To locally Host the Project** 

Unzip the project and Paste it in htdocs folder

To use this project have to setup the Database

    create a database in MySQL server named ankitdb.

Next, you should replace the database file

    open database.php file
    change the database credentials with yours

You should import the sql file to your created database

    import ankitdb.sql file via phpmyadmin or any other tools

Finally, view the project using
    
    http://localhost/"name-of-the-project"/login.php
    
  <br />  
    
**To Host the Project on AWS (WIth CI/CD)** 

Create Elastic Beanstalk Environment on aws for PHP
    
Create Codepipeline to connect your Github repository with AWS
    
    Use Github Webhook to trigger codbuild when you do any commits

Create CodeBuild to Build your project (CI)

    Specify the buildspec.yml file in the codebuild 
    
    buildspec.yml contains files that you want our build to produce
    
    Connect codebuild with Elastic beanstalk environment you have created earlier to deploy that produced file

Create mysql database instance on AWS RDS (Relational Database Service)
 
    Ensure Database is publicly accesible
    Note the RDS-mysql database endpoint and port number
      
Connect to mysql DB instance to Confiqure database (MySql workbench)   
    
    Enter the DB endpoint, port number and password to connect
    create a database named ankitdb. 
    import ankitdb.sql to create tables

Replace the database file:

    open database.php file
    change the database credentials with yours (Host name should be AWS database endpoint)

Finally, view the project Using the link AWS Elastic Beanstalk provided
    

