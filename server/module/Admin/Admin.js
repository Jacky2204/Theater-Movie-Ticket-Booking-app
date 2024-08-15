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
  movie_trailer: {
    type: String,
    require: true,
  },
  movie_info: {
    type: String,
    require: true,
  },
  overview: {
    type: String,
    require: true,
  },
  movie_date: {
    type: Date,
    require: true,
  },
  movie_add_date: {
    type: Date,
    require: true,
  },
  //   movie_time: {
  //     type: Number,
  //     default:(new Date()).getTime(),
  //     require: true,
  //   },
  //   movie_add_time: {
  //     type: Number,
  //     default:(new Date()).getTime(),
  //     require: true, 
  //   },
  theater_name: {
    type: String,
    require: true,
  },
});

const adminData = model("adminData", newData);
export default adminData;
