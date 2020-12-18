Author : Ankit Kumar Singh

StudentID : x19205121

Module : Blockchain

Professor: Eoin Connolly

gitHub : https://github.com/ankitsingh2577/ankit_blockchain_project 

DocerHub : https://hub.docker.com/repository/docker/ankitsingh2577/ankit_blockchain_project

Pull Docker Image : docker pull ankitsingh2577/ankit_blockchain_project:2577


# Ethereum - Ropsten Test Network (Tokens Distribution from one account to different accounts)


## Introduction

We are transfering Ethereum ERC20 token on the Ropsten testnet and providing a code-based mechanism to perform basic token distributions from contract owner account to different accounts. 

##Setup Instructions

To download this project:

    $ git clone https://github.com/ankitsingh2577/ankit_blockchain_project

Open Remix on broswer using * https://remix.ethereum.org/ *

    Copy the code from ERC20_ankit.sol and paste it in Remix (Creates Contract)
    Compile and Deploy it on Ropsten testnet
    once contract deployed - verify and publish your contract (To verify your contract does not have any malicious code)

To install the dependencies (web3, express, big-numbers, etc):

    $npm install (Install all the dependencies from package.jason and package-lock.jason)

Change the Addresses, Private key and Infura ropsten url in all files (method.js and contract.js)
        
        Account address with your ropsten testnet account1 address i.e contract owner address
        Private key with Your Ropsten testnet account1 private key
        Infura ropsten URL with your Infura procject with endpoint Ropsten
        Contract Addresss with your deployed Remix code contract address

To transfer tocken

        Run method.js : node method.js

To tranfer tocken with rest api

    Run handler.js : node handler.js or curl -XPOST http://localhost:8080/transfer
    
To create and deploy docker image

     1. build docker container
        #$docker build -t [user/tag] . 

#check it's in images
#$docker images

#to see running containers
#docker ps 

#docker run -p 49160:8080 --name ankit -d ankitsingh2577/x19205121
