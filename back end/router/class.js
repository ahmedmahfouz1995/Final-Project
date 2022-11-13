const express = require("express");
const StudentModel = require("../models/student");
const TeacherModel = require("../models/teacher");
const ClassModel = require("../models/class");
const { get, getById, add, editById, deleteById } = require("../utils/crud");

const router = express.Router();

router.get("/", (req, res) =>
  get(ClassModel, ["teacher", "students"])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    })
);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  getById(id, ClassModel, ["teacher", "students"])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.post("/", (req, res) => {
  const classData = req.body;
  console.log(classData);
  add(new ClassModel(classData), ["teacher", "students"])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const overridingClassData = req.body;
  editById(id, overridingClassData, ClassModel, ["teacher", "students"])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteById(id, ClassModel, ["teacher", "students"])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

module.exports = router;
