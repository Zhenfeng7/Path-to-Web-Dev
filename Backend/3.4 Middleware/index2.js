import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
