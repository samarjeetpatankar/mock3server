const express = require("express");
const connectDB = require("./config");
const app = express();
const cors = require("cors");
const port = 8499;
const { productRouter } = require('./routes/productRoute');


app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OLX Classifieds (FullStack)" });
});

app.use("/" , productRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
connectDB();

