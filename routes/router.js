const express = require("express");

const {
  createTrackerCtrl,
  getTrackerCtrl,
  getSingleTrackerCtrl,
  putTrackerCtrl,
  deleteTrackerCtrl,
} = require("../controller/trackerctrl");

const router = express.Router();

router.post("/", createTrackerCtrl);

router.get("/", getTrackerCtrl);

router.get("/:id", getSingleTrackerCtrl);

router.put("/:id", putTrackerCtrl);

router.delete("/:id", deleteTrackerCtrl);

module.exports = router;
