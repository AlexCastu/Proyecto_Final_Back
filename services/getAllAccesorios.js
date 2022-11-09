const Accesorios = require("../models/AccesoriosModel");
const getAllAccesorios = async () => {
    return await Accesorios.find().populate("marca._id").exec();
};

module.exports = getAllAccesorios;
