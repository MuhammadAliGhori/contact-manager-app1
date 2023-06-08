const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
const contactRouter = require("./routes/contactRoutes");

const connectdb = require("./config/dbConnection");
// middleware
app.use(express.json());
app.use("/api/contacts", contactRouter);

app.use("/api/users", require("./routes/userRoutes"))
// Database
connectdb()
app.use(errorhandler)



app.listen(port, () => {
  console.log(`Port is listen on ${port}`);
});
