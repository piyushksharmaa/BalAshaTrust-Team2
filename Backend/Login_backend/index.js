import express from "express";
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const axios = require("axios");
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";
const JWT_SECRET = "sad2erewfewtrgvdscsacdwadsafgrwt346536";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/loginregisterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  level: Number,
});
const childSchema = new mongoose.Schema({
  state: String,
  district: String,
  shelterHome: String,
  childName: String,
  dateOfBirth: String,
  gender: String,
  caseNumber: String,
  dateOfCreation: String,
  lengthOfStay: String,
  reasonOfAdmission: String,
  numberOfVisits: String,
  caseHistory: String,
});
const policeReportSchema = new mongoose.Schema({
  policeReport: Object,
  policeReportRemarks: String,
});
const dcpuReportSchema = new mongoose.Schema({
  dcpuReport: Object,
});
const cwcSchema = new mongoose.Schema({
  cwcReport: Object,
});
const saaSchema = new mongoose.Schema({
  saaReport: Object,
});
const socialMediaSchema = new mongoose.Schema({
  socialMediaFile: Object,
  socialMediaText: String,
});
const newspaperFileSchema = new mongoose.Schema({
  newspaperFile: Object,
  newspaperText: String,
});
const missingComplaintFileSchema = new mongoose.Schema({
  missingComplaintFile: Object,
  missingComplaintText: String,
});
const ageVerificationFileSchema = new mongoose.Schema({
  ageVerificationFile: Object,
  ageVerificationText: String,
});
const newUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  admin: Number,
});
const Child = mongoose.model("Child", childSchema);
const PoliceReport = mongoose.model("PoliceReport", policeReportSchema);
const DcpuReport = mongoose.model("DcpuReport", dcpuReportSchema);
const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);
const CwcReport = mongoose.model("CwcReport", cwcSchema);
const SaaReport = mongoose.model("SaaReport", saaSchema);
const NewspaperFile = mongoose.model("NewspaperFile", newspaperFileSchema);
const MissingComplaintFile = mongoose.model(
  "MissingComplaintFile",
  missingComplaintFileSchema
);
const AgeVerificationFile = mongoose.model(
  "AgeVerificationFile",
  ageVerificationFileSchema
);
const User = new mongoose.model("User", userSchema);
// Defining Routes

app.post("/login", async (req, res) => {
  const { email, password, level } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User Not Found!", status: 404, data: "" });
  }
  console.log(level, user.level, "dasdsada");
  if (Number(level) !== Number(user.level)) {
    return res.json({
      status: 400,
      message: "Invalid Level!",
      data: "",
    });
  } else if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    let data = {};
    data = {
      email: email,
      token: token,
      level: level,
    };
    let userData = [];
    userData.push(data);
    if (res.status(201)) {
      return res.json({
        status: 200,
        message: "Login Successful!",
        data: userData,
      });
    } else {
      return res.json({
        status: 400,
        message: "Invalid Login Details!",
        data: "",
      });
    }
  }
  res.json({ status: 400, message: "Invalid Password!", data: "" });
});

app.post("/register", async (req, res) => {
  const { name, email, password, level } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      name,
      email,
      password: encryptedPassword,
      level,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/userdata", async (req, res) => {
  const { email } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    User1.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});
app.post("/workerdata", async (req, res) => {
  //   console.log(req.body);
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    // console.log(oldUser);
    res.send({ status: "ok", data: oldUser });
  } catch (error) {}
});

app.post("/api/Child", async (req, res) => {
  const child = new Child({
    state: req.body.state,
    district: req.body.district,
    shelterHome: req.body.shelterHome,
    childName: req.body.childName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    caseNumber: req.body.caseNumber,
    dateOfCreation: req.body.dateOfCreation,
    lengthOfStay: req.body.lengthOfStay,
    reasonOfAdmission: req.body.reasonOfAdmission,
    numberOfVisits: req.body.numberOfVisits,
    caseHistory: req.body.caseHistory,
  });
  console.log(child);
  await child.save();

  res.json(child);
});

app.post("/api/policeReport", async (req, res) => {
  const policeReport = new PoliceReport({
    policeReport: req.body.policeReportFile,
    policeReportRemarks: req.body.policeReportText,
  });
  console.log(policeReport);
  await policeReport.save();
  res.json(policeReport);
});

app.post("/api/dcpu", async (req, res) => {
  const dcpuReport = new DcpuReport({
    dcpuReport: req.body.dcpuFile,
  });
  console.log(dcpuReport);
  await dcpuReport.save();
  res.json(dcpuReport);
});

app.post("/api/newspaper", async (req, res) => {
  const newspaperFile = new NewspaperFile({
    newspaperFile: req.body.newspaperFile,
    newspaperText: req.body.newspaperText,
  });
  console.log(newspaperFile);
  await newspaperFile.save();
  res.json(newspaperFile);
});

app.post("/api/cwc", async (req, res) => {
  const cwcReport = new CwcReport({
    cwcFile: req.body.cwcFile,
  });
  console.log(cwcReport);
  await cwcReport.save();
  res.json(cwcReport);
});

app.post("/api/saa", async (req, res) => {
  const saaReport = new SaaReport({
    saaReport: req.body.saaFile,
  });
  console.log(saaReport);
  await saaReport.save();
  res.json(saaReport);
});

app.post("/api/social", async (req, res) => {
  const socialMedia = new SocialMedia({
    socialMediaFile: req.body.socialMediaFile,
    socialMediaText: req.body.socialMediaText,
  });
  console.log(socialMedia);
  await socialMedia.save();
  res.json(socialMedia);
});

app.post("/api/missing", async (req, res) => {
  const missingComplaintFile = new MissingComplaintFile({
    missingComplaintFile: req.body.missingComplaintFile,
    missingComplaintText: req.body.missingComplaintText,
  });
  console.log(missingComplaintFile);
  await missingComplaintFile.save();
  res.json(missingComplaintFile);
});

app.post("/api/age", async (req, res) => {
  const ageVerificationFile = new AgeVerificationFile({
    ageVerificationFile: req.body.ageVerificationFile,
    ageVerificationText: req.body.ageVerificationText,
  });
  console.log(ageVerificationFile);
  await ageVerificationFile.save();
  res.json(ageVerificationFile);
});

app.post("api/login", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
  });
  await user.save();
  console.log(user);
  res.json(user);
});

app.post("/api/list", async (req, res) => {
  try {
    const data = await Child.find({}).exec(); // Add `await` and `exec()` to retrieve the data
    console.log(data);
    res.json(data);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Internal Server Error" }); // Update the status code to 500 for Internal Server Error
  }
});

const port = process.env.PORT || 9002;
app.listen(port, () => console.log(`Listening on port ${port}...`));
