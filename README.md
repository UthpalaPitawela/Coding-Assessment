# Coding Assessment

This repository includes the solution implementation for Task 01 and Task 02 mentioned below.

## Task 01

**Objective**: Develop a React component that allows users to drag and drop items between two lists and reorder items within the same list using drag-and-drop operations. 

**React Components**:  
- Create components for representing lists and list items.  
- Implement drag-and-drop functionality using ReactJS or HTML5 Drag and Drop API.  

## Task 02

**Objective**: Develop a serverless CRUD (Create, Read, Update, Delete) application using AWS Lambda functions and MongoDB as the database, integrated with a React frontend.  

**Components**:  

AWS Lambda Functions:  
- Create Function: Receives data from the React frontend and inserts it into the MongoDB collection.  
- Read Function: Retrieves data from the MongoDB collection based on specified criteria and sends it to the React frontend.  
- Update Function: Modifies existing data in the MongoDB collection based on requests from the React frontend.  
- Delete Function: Removes data from the MongoDB collection as per requests from the React frontend.   

MongoDB Database:  
- Set up a MongoDB cluster or instance on AWS (or any preferred cloud provider).  
- Create a database and collection(s) to store the application data.  

React Frontend:  
- Design UI components for interacting with CRUD operations (e.g., forms for create/update, lists for read, buttons for delete).  
- Implement logic to interact with AWS Lambda functions for CRUD operations.  
- Use React Hooks or Context API for managing state and handling data flow.  

# Solution Implementation

## Solution for Task 01

The solution for the Task 01 was implemented under the project folder drag-and-drop.

### How to run the application locally

**Environment Requirements**\
Node 16

**To run**
```sh
npm i
npm start
```

## Solution for Task 02

The frontend implementation for the Task 02 included in the frontend project folder and backend implementation included in the backend project folder

**Environment Requirements**\
Node 16\
Serverless Framework core: 3.38.0

**To run frontend**
```sh
npm i
npm start
```

**To run backend**
```sh
npm i
npm start
```


  
    


