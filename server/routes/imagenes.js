const express = require('express');

const fs = require('fs');
const path = require('path');

const { verificaTokenImg } = require('../middleware/autenticacion')

let app = express();


app.get('/imagen/:tipo/:img', verificaTokenImg, (req, res) => { // para obtener las imagenes de un usuario o producto

    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${tipo}/${img}`);
    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        let pathNoImage = path.resolve(__dirname, '../assets/161 no-image.jpg')
        res.sendFile(pathNoImage); //devuelve siempre el tipo del archivo no importa cual sea
    }


});




module.exports = app;