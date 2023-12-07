const mongoose = require("mongoose");
const awardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  gift: {
    type: String,
  },
  awardName: {
    type: String,
  },
  empno: {
    type: Number,
  },
  awardDate: {
    type: Date,
  },
});
const Award = mongoose.model("Award", awardSchema);
module.export = Award;
