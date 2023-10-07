const EXPENSETRACKER = require("../model/tracker");

const createTrackerCtrl = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const newTracker = await EXPENSETRACKER.create({
      amount,
      description,
      category,
    });
    console.log(newTracker);
    res.json({
      status: "success",
      data: newTracker,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTrackerCtrl = async (req, res) => {
  try {
    const gettracker = await EXPENSETRACKER.findAll();
    res.json({
      status: "success",
      data: gettracker,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleTrackerCtrl = async (req, res) => {
  try {
    const tracker = await EXPENSETRACKER.findByPk(req.params.id);
    if (!tracker) {
      return res.status(420).json({ message: "tracker not found" });
    }
    res.json({
      status: "success",
      data: tracker,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const putTrackerCtrl = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const updatedTracker = await EXPENSETRACKER.update(
      { amount, description, category },
      { where: { id: req.params.id } }
    );
    if (updatedTracker[0] === 0) {
      return res.status(500).json({ message: "tracker not found" });
    }
    const tracker = await EXPENSETRACKER.findByPk(req.params.id);
    res.json({
      status: "success",
      data: tracker,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
};

const deleteTrackerCtrl = async (req, res) => {
  try {
    const deletedTracker = await EXPENSETRACKER.destroy({
      where: { id: req.params.id },
    });
    if (deletedTracker === 0) {
      return res.statust(500).json({ message: "tracker not found" });
    }
    res.json({
      status: "success",
      data: "tracker has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
};

module.exports = {
  createTrackerCtrl,
  getSingleTrackerCtrl,
  getTrackerCtrl,
  putTrackerCtrl,
  deleteTrackerCtrl,
};
