- .dotenv : package that helps to import .env variables . How ? Other alternative ?

- Learn about process.exit() of nodejs

- -r dotenv/config --experimental-json-modules about it

- whenever we have to do middlewares or configuration settings in application we use  app.use()

- Learn about CORS (youtube and docs) what is is and more and the options (from npm ) available in it

- app.use(express.json({limit:"16kb"})) Learn about it  
   As it is use to handle when json data is coming maybe from form or body ,etc previously body-parser where used but now it is in-built in express js

- app.use(express.urlencoded({extended:true , limit:"16kb"}))  
   When we are taking data from url there is a problem that sometimes space in url are encoded as + or %20 so we have to say express that from url also data is coming so you have to decode it and then deliever for that we use express.urlencoded as a middleware  
   Extended : true -> says that is can be nested objects too  

- express.static  
  It is used to store public assest in our server (img , favion , any file)

- Higher Order function  
  a function that takes function as an arguments or return a function ex.map,filter  . It is used as a warp or abstraction of common behaviour or u have make a module/function that is repeated everytime.

- AsyncHandler Function Detail  
  (See javascript videos of promises and async-await)  
  [Docs](https://chatgpt.com/share/671a3ec8-2804-800c-bd9a-b74a3cbdf6ce)  

- Nodejs Api Error  
  (Study classes in JS youtube)  

- Server Status Code  
  Study about it

- MongoDb save id in bison data not in json data . Learn about it

- Learn about indexing general and in MongoDb too

- Learn about minimize feature of mongoDB   

- Learn and practice more about DB designing and schema in MongoDb

- Learn About mongoose aggregation pipelines and its package too

- Learn about package bcrypt , jsonWebToken(jwt Token) , with it methods and hooks of mongoose , isModified  

- this reference is only available to default function syntax not in arrow function  