const express = require("express");
const { db } = require("./utils/db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { authRoutes } = require("./routes/auth.js");

const corsOptions = {
  origin: true,
  credentials: true,
};

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json()); // support json encoded bodies

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

app.use(authRoutes);

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
