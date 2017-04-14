# sampleFoodOrders
Simple Food Order API

# Using Node and npm
use `npm install` once you've pulled to gather all the dependencies, then `npm start` to load up the application

#Connecting to a DB
From the article, there's a neat tool [mLab](https://mlab.com/) where you can host a free play-db.

#There are two methods in the API
## GET on /foodOrders
this will return all the orders in the DB

## POST to /foodOrders
sending in parameters: name, establishment, and order will save a new record to your DB.