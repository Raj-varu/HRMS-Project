const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hrms");
    console.log("DB Connected".bgGreen);
  } catch (error) {
    console.error("DB Connection Error: ", error);
  }
};
module.exports = DBconnect;
