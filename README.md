
# REST API Pagination Example
A small backend NodeJS application with a common requirement for most projects: REST APIs with Pagination. Here I provide an example of a simple API to manage Task creation. The goal of this mini project is to show you how you can manage pagination using two different databases e two different frameworks: MongoDB with Mongoose and PostgreSQL with Prisma ORM using Clean Architecture concepts.

## Tech Stack  
NodeJS, Typescript, Express, MongoDB, Mongoose, PostgreSQL, Prisma ORM, Zod, Docker Compose  

## How to Run Locally  

- Go to [NodeJS](https://nodejs.org/) WebSite and install it if not yet installed
- Install [Docker and Docker Compose](https://www.docker.com/)
- Install [Postman](https://www.postman.com/) in order to call the APIs

Clone the project  

~~~bash  
  git clone https://github.com/caio-cesar/pagination-typescript-node.git
~~~

Go to the project directory  

~~~bash  
  cd pagination-typescript-node
~~~

Install dependencies  

~~~bash  
npm install
~~~

Run Docker-Compose in order to start the Database

~~~bash  
docker-compose up -d
~~~

* Copy and paste the file ".env.example" and rename it to only ".env" and keep it in the root folder.

Run Prisma Migrations in order to create the Tables in PostgreSQL Database:

~~~bash  
npx prisma migrate dev
~~~

Start the server  

~~~bash  
npm run dev
~~~  

## Calling Task Rest API and Testing the Pagination
* Import the file **NodeJS-Typescript-Pagination.postman_collection** into your Postman.
- Create some Tasks using the **POST** Create Task Endpoint
- Now test the pagination using the **GET** Find Tasks Endpoint:
  - Use the **size** parameter for how many tasks should be displayed per page
  - Use the **page** parameter to set the current page




## Switching to MongoDB with Mongoose 

In case you want you to test it using MongoDB with Mongoose, just change the .env variable **DATABASE_DRIVER** to **mongodb** and restart the project.