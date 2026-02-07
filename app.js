import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: "." });
});

app.get("/about", (req, res) => {
  res.send("THIS IS THE ABOUT PAGE");
});

app.get("/pricing", (req, res) => {
  res.send("THIS IS THE PRICING PAGE");
});

app.get("/contact", (req, res) => {
  res.status(200).json({
    Message: "THIS IS THE CONTACT PAGE",
    Name: "MUSTAPHA",
    Email: "mustaphabusari2005@gmail.com",
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
