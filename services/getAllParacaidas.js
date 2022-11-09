
const Paracaidas = require("../models/ParacaidasModel");
const getAllParacaidas = async () => {
    return await Paracaidas.find().populate("marca._id").exec();
};

module.exports = getAllParacaidas;