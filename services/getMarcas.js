const Marcas = require("../models/MarcaModel.js");

const getMarcas = async () => {
   return await Marcas.find().populate("marca._id").exec();
};

module.exports = getMarcas;
