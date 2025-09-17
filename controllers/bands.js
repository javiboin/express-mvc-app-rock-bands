bandas = [
    {
        id: 1,
        nombre: 'Nombre 1'
    },
    {
        id: 2,
        nombre: 'Nombre 1'
    },
]

const bandsController = {
    index: (req, res, next) => {
        // traer a la vista (id + banda en un array)
        res.render('bands', { bandas: bandas});
    },
    show: (req, res, next) => {
        const id = req.params.id;
        // validar id si existe
        // traer (informacion de la banda con todos sus datos)
        res.send(`Mostrar banda segun ID: ${id}`);
    }
}

module.exports = bandsController;