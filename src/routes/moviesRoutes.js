const express = require('express');
const router = express.Router();
const {list,
         news,
        recomended,
        detail,
        add,
        create,
        edit,
        update,
        deleted,
        destroy
    } = require('../controllers/moviesController')

router.get('/movies', list);
router.get('/movies/new', news);
router.get('/movies/recommended', recomended);
router.get('/movies/detail/:id', detail);
//Rutas exigidas para la creación del CRUD
router.get('/movies/add', add);
router.post('/movies/create', create);
router.get('/movies/edit/:id', edit);
router.post('/movies/update/:id', update);
router.get('/movies/delete/:id', deleted);
router.post('/movies/delete/:id', destroy);

module.exports = router;