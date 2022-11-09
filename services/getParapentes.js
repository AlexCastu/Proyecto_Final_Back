const Parapentes = require("../models/ParapenteModel");

const getParapentes = async (data) => {

    const precio  =  data.precio  === "0" ||data.precio === "undefined" ? 1000000:data.precio;
    let ordenPrecio = data.ordenPrecio === "1" ? {price:1}:data.ordenPrecio==="2"?{price:-1}:{};
    let ordenMarca = data.ordenMarca === "1" ? {"marca.nombre":1}:data.ordenMarca==="2"?{"marca.nombre":-1}:{};
    const filtroSort = data.ordenMarca === "3" ? ordenPrecio : ordenMarca;


    return await Parapentes.paginate(
           {"marca.nombre":data.fabricante||/.+/,categoria:data.categoria||/.+/, modelo: { $regex: data.busquedaManual, $options: "i" },price: { $lte:precio} },
           { page:data.pagina , sort:filtroSort, limit: 10}
      );
};

module.exports = getParapentes;
