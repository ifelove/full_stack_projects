const express=require('express')
const router=express.Router()
const {getAllBooks,getFilterLogic,getSingleBooks,postBook,updateSingleBook,deleteBook}=require('../controller/book-controller')

router.route('/').get(getAllBooks).get(getFilterLogic).post(postBook)
router.route('/:id').get(getSingleBooks).patch(updateSingleBook).delete(deleteBook)


module.exports=router