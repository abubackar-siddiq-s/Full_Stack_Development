const express = require("express");
const multer = require("multer");

var app = express();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send(`
    <h1>Upload Your File</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
