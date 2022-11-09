const Paracaidas = require("../models/ParacaidasModel");

const getParacaidas = async (data) => {

    const precio  =  data.precio  === "0" ? 1000000:data.precio;
    let ordenPrecio = data.ordenPrecio === "1" ? {price:1}:data.ordenPrecio==="2"?{price:-1}:{};
    let ordenMarca = data.ordenMarca === "1" ? {"marca.nombre":1}:data.ordenMarca==="2"?{"marca.nombre":-1}:{};
    const filtroSort = data.ordenMarca === "3" ? ordenPrecio : ordenMarca;

    return await Paracaidas.paginate(
            {"marca.nombre":data.fabricante||/.+/, modelo: { $regex: data.busquedaManual, $options: "i" },price: { $lte:precio} },
            { page:data.pagina ,sort:filtroSort, limit: 5 }
            );
};

module.exports = getParacaidas;
