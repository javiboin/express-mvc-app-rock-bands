const dbBandas = require('../db/index');

function buscarGenerosMusicales(){
    return [...new Set(dbBandas.lista.map(banda => banda.genero))];
}

function validarGenero(genero){
    return dbBandas.lista.find(g => g.genero == genero);
}

function obtenerBandasPorGenero(genero) {
    return dbBandas.lista.filter(b => b.genero.toLowerCase() == genero.toLowerCase())
}

const genreController = {
    index: (req, res, next) => {
        listaDeGenerosUnicos = buscarGenerosMusicales();
        res.render('genres', { generosMusicales: listaDeGenerosUnicos });
    },
    show: (req, res, next) => {
        const genero = req.params.genre;
        const generoEncontrado = validarGenero(genero);
        
        if (!generoEncontrado){
            return res.status(404).send('Recurso no encontrado');
        }
        
        const bandasDelGenero = obtenerBandasPorGenero(genero);

        res.render('byGenre', {
            genero: genero,
            bandas: bandasDelGenero
        });
    }
}

module.exports = genreController;