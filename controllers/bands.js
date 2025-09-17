const bandas = require('../db/index.js');

function obtenerIdYNombre(array) {
    return array.map(banda => ({
        id: banda.id,
        nombre: banda.nombre
    }))
}

function buscarBanda(id) {
    return bandas.lista.find(banda => banda.id == id);
}

const lista = obtenerIdYNombre(bandas.lista);


const bandsController = {
    index: (req, res, next) => {
        res.render('bands', { bandas: lista });
    },
    show: (req, res, next) => {
        const id = req.params.id;
        const banda = buscarBanda(id);
        
        if (!banda) {
            res.status(404).send('Recurso no encontrado');
        }

        res.send(`
            Mostrar banda segun ID: ${id}, <br>
            Nombre: ${banda.nombre}, <br>
            Integrantes: ${banda.integrantes}, <br>
            Genero: ${banda.genero}
        `);
    }
}

module.exports = bandsController;