const express = require("express");

const app = express();

const PORT = 3000;

let counter = 0;

// Middleware to parse incoming JSON data
app.use(express.json());

// getting the values

app.get("/counter", (req, res) => {
  res.json({ value: counter });
});

// incrrementing the counter values

app.post("/counter/incrrement", (req, res) => {
  counter++;
  res.json({ value: counter, message: "counter is incrrement" });
});

// Decrrmentig the counter values

app.post("/counter/decrrment", (req, res) => {
  counter--;
  res.json({ value: counter, message: "Counter is decrrment" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
