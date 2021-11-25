const e = require("express");
const { user } = require("../Data");
const { Employe } = require("../DataEmp");
// _________________________________________________________________________
//  getUser
// _________________________________________________________________________
const getAllUser = (req, res) => {
  res.send(user);
};
const getUser = (req, res) => {
  console.log(req.body);
  console.log(user);
  const { email, password } = req.body;
  console.log("email sent:", email);
  const foundUser = user.find((elem) => {
    console.log("email in database:", elem.email);
    return elem.email == email && elem.password == password;
  });
  console.log(foundUser);
  if (foundUser) res.send(foundUser);
  else
    res
      .status(404)
      .send(
        "We couldn’t find an account matching the email and password you entered. Please check and try again."
      );
};

const addNewUser = (req, res) => {
  const addedUser = {
    name: req.body.name,
    job: req.body.job,
  };
  user.push(addedUser);
  res.status(201).send(addedUser);
};

const addNewVacation = (req, res) => {
  const Id = sessionStorage.getItem("Id");
  const addVecation = {
    id: Id,
    Name: "Reem Saeed",
    JobTitle: "Admin",
    vanction: "",
    starDate: "",
    endDate: "",
    state: "",
  };

  Employe.push(addVecation);
  res.status(201).send(addVecation);
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  user.forEach((elem, i) => {
    if (i == userId) {
      elem.name = req.body.name;
      elem.job = req.body.job;
      elem.Tell = req.body.Tell;
    }
  });
};
const registrUser = (req, res) => {
  const userId = req.query.id;
  user.forEach((elem, i) => {
    if (i == userId) {
      elem.name = req.body.name;
      elem.job = req.body.job;
      elem.Tell = req.body.Tell;
      elem.birthCity = req.body.birthCity;
      elem.birthCountry = req.body.birthCountry;
    }
  });
};
module.exports = { getAllUser, getUser, updateUser, addNewUser, registrUser, addNewVacation };
