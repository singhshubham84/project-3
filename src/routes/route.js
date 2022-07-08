const express = require('express');
const router =express.Router();
const userController =require('../controllers/userController')
const bookController =require('../controllers/bookController')
const auth =require('../middleware/auth')



router.post("/register", userController.createUser) //To create a user

router.post("/login", userController.userLogIn) // For login 

router.post("/books",auth.authentication,auth.userAuthorization, bookController.createBook) // To create a book 

router.get('/books', auth.authentication, bookController.getBook) // get the book data

router.get('/books/:bookId', auth.authentication, bookController.getBookById) // get the book data by its ID

router.put('/books/:bookId',auth.authentication,auth.bookAuthorization,bookController.bookUpdate) // update the book data

router.delete('/books/:bookId',auth.authentication,auth.bookAuthorization,bookController.delBookById)  //delete book data by its ID



module.exports = router;