import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("hello from express js");
  res.status(200);
  res.json("Hello");
});

export default app;