const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to mongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Contact Book Home Page" });
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
