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

    $npm install (Install all the dependencies for package.jason and package-lock.jason)

Change the Addresses, Private key and Infura ropsten url in all files (method.js and contract.js)
        
        Example: 
    



Step IX : Install dependencies by running "npm i" command (All the required dependencies are already in package.json)

Step X : Run method.js by using node method.js

Step XI : Run handler.js using curl -XPOST http://localhost:8080/transfer or node handler.js
