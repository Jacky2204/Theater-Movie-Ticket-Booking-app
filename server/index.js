import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminData from "./module/Admin/Admin.js";
import userData from "./module/User/User.js";
import movieData from "./module/Movie/Movie.js";
import trailerData from "./module/Trailer/Trailer.js";
import seatData from "./module/Seat/Seat.js";

const app = express();
app.use(express.json());

const PORT = 2000;
app.use(cors());

app.listen(PORT, () => {
  console.log("server is running on PORT", PORT);
});

const Data = async () => {
  await mongoose.connect(
    "mongodb+srv://jalindarbhapkar40:sbqCCOx3J4B179SS@cluster0.qjfpks5.mongodb.net/ticket_book"
  );
  console.log("DataBase Connected");
};

Data();

// for Movie Data only
app.post("/movies", async (req, res) => {
  try {
    const {
      name,
      poster,
      trailer,
      director,
      cast,
      description,
      category,
      language,
      duration,
      type,
    } = req.body;

    const newData = await movieData.create({
      name: name,
      poster: poster,
      trailer: trailer,
      director: director,
      cast: cast,
      description: description,
      category: category,
      language: language,
      duration: duration,
      type: type,
    });

    res.json({
      success: true,
      data: newData,
      msg: "Movie Data is added Successfully....",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

app.get("/movieInfo", async (req, res) => {
  try {
    const allData = await movieData.find();

    res.json({
      success: true,
      data: allData,
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

// for trailer data
app.post("/trailer", async (req, res) => {
  try {
    const { name, trailer } = req.body;

    const newData = await trailerData.create({
      name: name,
      trailer: trailer,
    });

    res.json({
      success: true,
      data: newData,
      msg: "Trailer Data is added Successfully....",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

app.get("/trailerInfo", async (req, res) => {
  try {
    const allData = await trailerData.find();

    res.json({
      success: true,
      data: allData,
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

// seat Data

app.post("/seat", async (req, res) => {
  try {
    const { row, number } = req.body;

    const newData = await seatData.create({
      row: row,
      number: number,
    });

    res.json({
      success: true,
      data: newData,
      msg: "seat is added",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});



app.get("/seats", async (req, res) => {
  try {
    const allData = await seatData.find();
    res.json({
      success: true,
      data: allData,
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

app.post("/book", async (req, res) => {
  const { row, number } = req.body;
  try {
    const seat = await seatData.findOne({ row, number });
    if (seat.status === "availabe") {
      seat.status = "booked";
      await seat.save();
      res.json({
        success: true,
        msg: "Seats booked successfully",
      });
    } else {
      res.json({
        success: true,
        msg: "Seats already booked",
      });
    }
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

// For admin Data Only........
app.post("/adminSign", async (req, res) => {
  try {
    const { fname, lname, username, email, phone, address, pin, password } =
      req.body;

    const newData = await adminData.create({
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      phone: phone,
      address: address,
      pin: pin,
      password: password,
    });

    res.json({
      success: true,
      data: newData,
      msg: "Data is added Successfully....",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

app.post("/adminLog", async (req, res) => {
  const { email, password } = req.body;

  const newData = await adminData.findOne({
    email: email,
    password: password,
  });

  try {
    if (newData) {
      return res.json({
        success: true,
        data: newData,
        msg: "Login successfully...",
      });
    } else {
      return res.json({
        success: false,
        msg: "Login Failed",
      });
    }
  } catch (e) {
    return res.json({
      success: false,
      msg: "Login Failed",
    });
  }
});

app.get("/adminInfo", async (req, res) => {
  try {
    const { id } = req.params;
    const allData = await adminData.findOne();

    res.json({
      success: true,
      data: allData,
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

// For User Data Only........
app.post("/userSign", async (req, res) => {
  try {
    const { fname, lname, username, email, phone, address, pin, password } =
      req.body;

    const newData = await userData.create({
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      phone: phone,
      address: address,
      pin: pin,
      password: password,
    });

    res.json({
      success: true,
      data: newData,
      msg: "Data is added Successfully....",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

// log in
app.post("/userLog", async (req, res) => {
  const { email, password } = req.body;

  const newData = await userData.findOne({
    email: email,
    password: password,
  });

  if (newData) {
    res.json({
      success: true,
      data: newData,
      msg: "data is found successfully...",
    });
  } else {
    res.json({
      success: false,
      msg: "Data is not found",
    });
  }
});

app.get("/userInfo/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const allData = await userData.findOne({ _id: _id });

    res.json({
      success: true,
      data: allData,
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});

app.post("/ticket", async (req, res) => {
  try {
    const {
      movie_name,
      movie_poster,
      theater_name,
      movie_date,
      seat_no,
      total_ticket,
      price,
    } = req.body;

    const newData = await userData.create({
      movie_name: movie_name,
      movie_poster: movie_poster,
      theater_name: theater_name,
      movie_date: movie_date,
      seat_no: seat_no,
      total_ticket: total_ticket,
      price: price,
    });

    res.json({
      success: true,
      data: newData,
      msg: "Data is added Successfully....",
    });
  } catch (error) {
    res.json({
      success: true,
      msg: error.message,
    });
  }
});
