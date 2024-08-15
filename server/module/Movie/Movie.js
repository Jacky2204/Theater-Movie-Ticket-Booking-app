import { Schema, model } from "mongoose";

const newData = new Schema({
  name: {
    type: String,
    require: true,
  },
  poster: {
    type: String,
    require: true,
  },
  trailer: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  cast: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {  //holly bolly
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  
});

const movieData = model("movieData", newData);
export default movieData;
