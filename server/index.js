const express = require("express");
const { json } = require("express");
const colors = require("colors");
const cors = require("cors");
const multer = require("multer");
const DBconnect = require("./utils/DBconnect");
const upload = multer({ dest: "uploads/" });

//express object
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Routes locations
const employeeRouter = require("./routes/employeeRoute");
//redirecting Routes
app.use("/employee", employeeRouter);

const startServer = async () => {
  try {
    await DBconnect(); // Wait for the DB connection before starting the server
    app.listen(8080, () => {
      console.log("Server is running on port 8080".bgYellow);
    });
  } catch (error) {
    console.error("Error starting the server: ", error);
  }
};
startServer();
