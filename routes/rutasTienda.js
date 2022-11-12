const { Router } = require("express");
const getAccesorios = require("../services/getAccesorios");
const router = Router();
const getMarcas = require("../services/getMarcas");
const getParapentes = require("../services/getParapentes");
const getSillas = require("../services/getSillas");
const getParacaidas = require("../services/getParacaidas");
const getProductosIniciales = require("../services/getProductosIniciales");
const getAllParapentes = require("../services/getAllParapentes");
const getAllSillas = require("../services/getAllSillas");
const getAllParacaidas = require("../services/getAllParacaidas");
const getAllAccesorios = require("../services/getAllAccesorios");
const getProducto = require("../services/getProducto");
const agregarCarrito = require("../services/agregarCarrito");
const getProductosCesta = require("../services/getProductosCesta");
const eliminarDeLaCesta = require("../services/eliminarDeLaCesta");

// Router a los servicios ALL

router
   .get("/allParapentes", async (request, response, next) => {
      try {
         const docs = await getAllParapentes();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/allSillas", async (request, response, next) => {
      try {
         const docs = await getAllSillas();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/allParacaidas", async (request, response, next) => {
      try {
         const docs = await getAllParacaidas();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/allAccesorios", async (request, response, next) => {
      try {
         const docs = await getAllAccesorios();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   });

//Router a los servicios iniciales

router.get("/productosIniciales", async (request, response, next) => {
   try {
      const docs = await getProductosIniciales;
      response.json(docs).status(200).end();
   } catch (err) {
      next(err);
   }
});

// Router a los servicios individuales.

router
   .get("/parapentes", async (request, response, next) => {
      const data = request.query;
      try {
         const docs = await getParapentes(data);
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/paracaidas", async (request, response, next) => {
      const data = request.query;
      try {
         const docs = await getParacaidas(data);
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/marcas", async (request, response, next) => {
      try {
         const docs = await getMarcas();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/sillas", async (request, response, next) => {
      const data = request.query;
      try {
         const docs = await getSillas(data);
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/accesorios", async (request, response, next) => {
      const data = request.query;
      try {
         const docs = await getAccesorios(data);
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   });

//Router de acceso a los datos de un unico producto para rellenar modal de compra

router.get("/productoUnico", async (request, response, next) => {
   const data = request.query;

   try {
      const docs = await getProducto(data);

      response.json(docs).status(200).end();
   } catch (err) {
      next(err);
   }
});

// Router para servicios de la cesta

router
   .get("/agregarALaCesta", async (request, response, next) => {
      const data = request.query;

      try {
         const docs = await agregarCarrito(data);
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/verLaCesta", async (request, response, next) => {
      try {
         const docs = await getProductosCesta();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   })
   .get("/eliminarDeLaCesta", async (request, response, next) => {
      const data = request.query;
      try {
         const docs = await eliminarDeLaCesta();
         response.json(docs).status(200).end();
      } catch (err) {
         next(err);
      }
   });
module.exports = router;
