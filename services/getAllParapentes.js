const Parapentes = require("../models/ParapenteModel");
const getAllParapentes = async () => {
    return await Parapentes.find().populate("marca._id").exec();
};

module.exports = getAllParapentes;
