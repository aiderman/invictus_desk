const { findAllBooks } = require('../controller/booksController');

const router =require ('express').Router()
router.get('/books',findAllBooks)


module.exports = router;
