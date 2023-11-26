const express = require("express");

const app = express();

const PORT = 3000;

// 1st route Home Page

app.get("/", (req, res) => {
  res.json({
    message: "I am home page",
  });
});

// 2 route about page
app.get("/about", (req, res) => {
  res.json({
    message: "I am about page",
  });
});

// 3 route Contact page route

app.get("/contact", (req, res) => {
  res.json({
    message: "Contact on email: support@gmail.com",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
