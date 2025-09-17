const bandsController = {
    index: (req, res, next) => {
        res.send('Mostrar listado de generos musicales');
    },
    show: (req, res, next) => {
        res.send('Mostrar bandas segun genero musical');
    }
}

module.exports = bandsController;