import { Schema, model } from "mongoose";

const newData = new Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  pin: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  movie_name: {
    type: String,
    require: true,
  },
  movie_poster: {
    type: String,
    require: true,
  },

  movie_info: {
    type: String,
    require: true,
  },

  movie_date: {
    type: Date,
    require: true,
  },

//   movie_time: {
//     type: Number,
//     default:(new Date()).getTime(),
//     require: true,
//   },
//   ticket_time: {
//     type: Number,
//     default:(new Date()).getTime(),
//     require: true,
//   },

  theater_name: {
    type: String,
    require: true,
  },
  seat_no: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  total_ticket: {
    type: Number,
    require: true,
  },
  theater_charge: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  
  
});

const userData = model("userData", newData);
export default userData;
 