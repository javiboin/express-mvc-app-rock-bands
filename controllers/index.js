const indexController = {
    index: (req, res, next) => {
        res.render('index', {title: 'Menu'});
    }
}

module.exports = indexController;