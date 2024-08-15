import { Schema, model } from "mongoose";

const seatSchema = new Schema({
  row: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    enm:['availabe','booked'],
    default: 'available',
  },
});

const seatData = model("seatData", seatSchema);
export default seatData;
