const express = require('express')
const app = express()
const port = 3001

const http = require('http');
app.use(express.static("public"))

// const server = http.createServer((request, response) => {
//   response.write('Hello, world!');
//   response.end();
// });

// server.listen(3001);

app.get("/home", (req, res)=>{
  res.sendFile(__dirname + "/views/home.html");
})

app.get("/about", (req, res)=>{
  res.sendFile(__dirname + "/views/about.html");
})

app.get("/works", (req, res)=>{
  res.sendFile(__dirname + "/views/works.html");
})

app.get("/photo-gallery", (req, res)=>{
  res.sendFile(__dirname + "/views/photo-gallery.html");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

