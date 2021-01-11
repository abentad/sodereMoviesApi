import fetch from "node-fetch";
import express from "express";
import { getMovies } from "./movies.js";

const app = express();

app.get("/", async (req, res) => {
  const url = "https://www.sodere.com/movies";
  const response = await fetch(url);
  const body = await response.text();
  const movies = getMovies(body);
  res.json(movies);
});

//
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server started at\n http://localhost:${port}`);
});
