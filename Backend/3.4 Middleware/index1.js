import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



//  app.use(path0, func), you're telling your Express app to use a particular 
//    middleware function or set of functions for every request that 
//    matches the specified path started with path0(default "/").
//  bodyParser.urlencoded(): It is used to handle form submissions in Express applications.
//      When a user submits a form, the data is sent in the URL-encoded format, 
//      and this middleware parses that data, making it available in the req.body object
// Here app.use(xxx,xxx) means whenever the request with path started with "/", 
// call bodyParser.urlencoded() which parse the HTTP form data sent in URL format, making the content
// accessible by req.body for the following app. methods, like app.get('/', (req, res)__)
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Whenever there is a POST request, run(req, res) => {console.log(req.body);}
// "/submit" comes from the HTML form action = "/submit"
app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log(req.body['ahaha']);
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
