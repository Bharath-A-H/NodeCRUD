const http= require("http");

const getReq = require("./Methods/get-req");
const postReq = require("./Methods/post-req");
const putReq = require("./Methods/put-req");
const deleteReq = require("./Methods/delete-req");
let movies=require("./data/movies.json");
// require("dotenv").config();

const port = process.env.port || 5001;

const server=http.createServer((req, res)=>{
    req.movies=movies;
   switch(req.method){
      case "GET":
        getReq(req, res)
        break;
      case "POST":
       postReq(req, res)
        break;
      case "PUT":
        putReq(req, res)
        break;
      case "DELETE":
        deleteReq(req, res)
        break;
      default:
        res.statusCode=404
      res.setHeader("Content-Type", "application/json");
     res.write(JSON.stringify({title: "Not Found", message: "Route not found"}))
       res.end()
    }
     
})  
server.listen(port, ()=>{
    console.log(`server started on port :${port}`)
})