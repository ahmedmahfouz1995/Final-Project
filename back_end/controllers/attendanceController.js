
const { get }= require("./../utils/crud");
const attendanceModel = require("../models/attendance");


// Get All
const getAllreports = ("/", async (req, res) => {
  try {
    const report= await attendanceModel.find({}).populate("teacher").populate("subject").populate("students._id")
    res.json(report);
  } catch (error) {
    console.log(error);
   res.json({ msg:error });
  }
});
console.log(attendanceModel.length);
//Get By Ida

const getReport = ("/:id",async (req, res, next) => {
  try {
    const {id}  = req.params;
    const report= await attendanceModel.findById(id).populate("teacher").populate("subject").populate("students._id")
    res.json(report);
  } catch (error) {
    res.json({ msg: "Error getting parent" });
  }
});

const creatReport = ("/", async (req, res, next) => {
  // try {
    let newReport = new attendanceModel(req.body);
    await get(attendanceModel,["teacher","subject","students._id"])
    await newReport.save();
    res.json(newReport);
    // } catch (error) {
    //   res.json({ msg: "Error creating report" });
    //   }
    });
    
    const editReport =("/:id", async (req, res, next) => {
      try {
        const {id}  = req.params;
       const report=await attendanceModel.findByIdAndUpdate(id,req.body)    
       console.log( report);
      res.json(report);
      } catch (error) {
        res.json(error);
      }
    });
    
    
    const deleteReport = ("/:id", async (req, res, next) => {
      
      try {
        const {id}  = req.params;
        let deletedReport = await attendanceModel.findByIdAndRemove(id);

        res.status(200).json(deletedReport);
      } catch (error) {
    next(error);
  }
});


module.exports = {
  getReport,
  creatReport,
  editReport,
  deleteReport,
  getAllreports, 
};
