const Accesorio = require("../models/AccesoriosModel.js");
const Parapentes = require("../models/ParapenteModel.js");
const Sillas = require("../models/SillaModel.js");
const Paracaidas = require("../models/ParacaidasModel.js");

const getProductosCesta = async () => {
   const retorno = {
      Sillas: await Sillas.find({ enLaCesta: true }).populate("marca._id").exec(),
      Parapentes: await Parapentes.find({ enLaCesta: true }).populate("marca._id").exec(),
      Paracaidas: await Paracaidas.find({ enLaCesta: true }).populate("marca._id").exec(),
      Accesorios: await Accesorio.find({ enLaCesta: true }).populate("marca._id").exec(),
   };
   return retorno;
};

module.exports = getProductosCesta;
