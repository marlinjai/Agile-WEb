// second simple server

// const port = 3000,
//   http = require("http"),
//   httpStatus = require("http-status-codes"),
//   app = http.createServer();

// const getJSONString = (obj) => {
//   return JSON.stringify(obj, null, 2);
// };

// app.on("request", (req, res) => {
//   var body = [];
//   req.on("data", (bodyData) => {
//     body.push(bodyData);
//   });
//   req.on("end", () => {
//     body = Buffer.concat(body).toString();
//     console.log(`Request Body Contents: ${body}`);
//   });
//   console.log(`Method: ${getJSONString(req.method)}`);
//   console.log(`URL: ${getJSONString(req.url)}`);
//   console.log(`Headers: ${getJSONString(req.headers)}`);
//   res.writeHead(httpStatus.OK, {
//     "Content-Type": "text/html",
//   });
//   let responseMessage = "<h1>This will show on the screen.</h1>";
//   res.end(responseMessage);
// });
// app.listen(port);
// console.log(`The server has started and is listening on port number:
//            ${port}`);

// Routing

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello":
    "<h1>Say hello by emailing us <a href='mailto:Marlin.Pohl@Student.HTW-Berlin.de'>here</a></h1>",
  "/error": "<h1>Sorry, the page you are looking for is not here.</h1>",
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    if (routeResponseMap[req.url]) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
      });
      res.end(routeResponseMap[req.url]);
    } else if (req.url === "/error") {
      res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/plain",
      });
      res.end(routeResponseMap[req.url]);
    } else {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
      });
      res.end("<h1>Welcome!</h1>");
    }
  });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
