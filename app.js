import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: "." });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
