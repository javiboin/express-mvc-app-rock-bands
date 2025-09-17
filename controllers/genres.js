const genreController = {
    index: (req, res, next) => {
        res.render('genres');
    },
    show: (req, res, next) => {
        const genre = req.params.genre;
        // validar parametro
        // mostrar (Genero, bandas de ese genero)
        res.send(`Mostrar bandas segun genero musical ${genre}`);
    }
}

module.exports = genreController;