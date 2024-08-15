import { Schema, model } from "mongoose";

const newData = new Schema({
  name: {
    type: String,
    require: true,
  },
  trailer: {
    type: String,
    require: true,
  },
});

const trailerData = model("trailerData", newData);
export default trailerData;
