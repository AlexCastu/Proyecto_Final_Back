require("./conexionMongo.js");
const Parapentes = require("./models/ParapenteModel");
const Marcas = require("./models/MarcaModel");
const parapentes = require("./Data/parapentes");
const marcas = require("./Data/marcas");
const Paracaidas = require("./models/ParacaidasModel");
const paracaidas = require("./Data/paracaidas");
const Accesorios = require("./models/AccesoriosModel");
const accesorios = require("./Data/accesorios");
const Sillas = require("./models/SillaModel");
const sillas = require("./Data/sillas");

const createdb = async (resquest, response) => {
   await Parapentes.deleteMany({});
   await Marcas.deleteMany({});
   await Accesorios.deleteMany({});
   await Paracaidas.deleteMany({});
   await Sillas.deleteMany({});

   const newMarcas = await Marcas.insertMany(marcas);
   const newParapentes = parapentes.map((parapente) => {
      const marca = newMarcas.filter((marcas) => marcas.cif === parapente.marca)[0];
      const { _id, nombre } = marca;
      return {
         ...parapente,
         marca: { _id, nombre },
      };
   });
   const newParacaidas = paracaidas.map((paraca) => {
      const marca = newMarcas.filter((marcas) => marcas.cif === paraca.marca)[0];
      const { _id, nombre } = marca;
      return {
         ...paraca,
         marca: { _id, nombre },
      };
   });
   const newAccesorios = accesorios.map((accesorio) => {
      const marca = newMarcas.filter((marcas) => marcas.cif === accesorio.marca)[0];
      const { _id, nombre } = marca;
      return {
         ...accesorio,
         marca: { _id, nombre },
      };
   });
   const newSillas = sillas.map((silla) => {
      const marca = newMarcas.filter((marcas) => marcas.cif === silla.marca)[0];
      const { _id, nombre } = marca;
      return {
         ...silla,
         marca: { _id, nombre },
      };
   });

   await Sillas.insertMany(newSillas);
   await Accesorios.insertMany(newAccesorios);
   await Parapentes.insertMany(newParapentes);
   await Paracaidas.insertMany(newParacaidas);
};

createdb();
