const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "crud.html"));
});

mongoose.connect("mongodb://127.0.0.1:27017/eventDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  number: { type: String, unique: true },
  email: String,
  gender: String,
  address: String
});

const User = mongoose.model("User", userSchema);
app.post("/register", async (req, res) => {
  try {
    await User.create(req.body);
    res.send("Registered Successfully <br><a href='/'>Go Back</a>");
  } catch (err) {
    res.send("Number already exists! <br><a href='/'>Go Back</a>");
  }
});
app.post("/update", async (req, res) => {
  const { number, email, address } = req.body;
  const updated = await User.findOneAndUpdate(
    { number },
    { email, address },
    { new: true }
  );
  if (updated)
    res.send("Updated Successfully <br><a href='/'>Go Back</a>");
  else
    res.send("User not found <br><a href='/'>Go Back</a>");
});
app.get("/users", async (req, res) => {
  const users = await User.find();

  let table = `
    <h2>User List</h2>
    <table border="1" cellpadding="10">
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
  `;
  users.forEach(u => {
    table += `
      <tr>
        <td>${u.name}</td>
        <td>${u.number}</td>
        <td>${u.email}</td>
        <td>${u.gender}</td>
        <td>${u.address}</td>
        <td>
          <form action="/delete/${u._id}" method="POST" onsubmit="return confirm('Delete this user?')">
            <button type="submit">Delete</button>
          </form>
        </td>
      </tr>
    `;
  });
  table += "</table><br><a href='/'>⬅ Back</a>";
  res.send(table);
});
app.post("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (err) {
    res.send("Error deleting user");
  }
});
app.listen(5500, () => {
  console.log("Server running at http://localhost:5500");
});