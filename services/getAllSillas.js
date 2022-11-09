const Sillas = require("../models/SillaModel");
const getAllSillas = async () => {
    return await Sillas.find().populate("marca._id").exec();
};

module.exports = getAllSillas;
