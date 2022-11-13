const express = require("express");
const SlotModel = require("../models/slot");
const { get, getById, add, editById, deleteById } = require("../utils/crud");

const router = express.Router();

router.get("/", (req, res) => {
  const { id: userId, role } = req.auth_token;
  // console.log("user: ", userId, "role", role);
  get(SlotModel, [])
    .then((response) => {
      console.log(response)
      return response
    })
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    })
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  getById(id, SlotModel, [])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.post("/", (req, res) => {
  const slotData = req.body;
  console.log(slotData);
  add(new SlotModel(slotData), [])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const overridingSlotData = req.body;
  editById(id, overridingSlotData, SlotModel, [])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteById(id, SlotModel, [])
    .then((respose) => res.json(respose))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error has occured");
    });
});

module.exports = router;
