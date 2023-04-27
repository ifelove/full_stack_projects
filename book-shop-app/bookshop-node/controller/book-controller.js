const Book=require('../models/Book-model')
const getAllBooks= async (req,res)=>{
    const books= await Book.find({})
    res.status(201).json({books})
}
const getSingleBooks = (req,res) => {
    res.status(200).send("...displaying Singlebook items");
};
const postBook=(req,res)=>{
    res.status(201).send('Item created Successfully')
}
const updateSingleBook=(reg,res)=>{
    res.status(201).send('SingleBoook updared successfully')
}
const deleteBook=(req,res)=>{
    res.status(200).send('...deleted successfully')
}

const getFilterLogic = (req,res) => {
    res.status(201).send('...gettting logic')
};


module.exports={getAllBooks,getSingleBooks,postBook,deleteBook,updateSingleBook,getFilterLogic}