const bandsController = {
    index: (req, res, next) => {
        res.send('Mostrar listado de las bandas');
    },
    show: (req, res, next) => {
        res.send('Mostrar banda segun ID');
    }
}

module.exports = bandsController;