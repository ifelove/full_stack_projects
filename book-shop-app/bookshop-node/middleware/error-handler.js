const errorHandler=(err,req,res,next)=>{
    console.log(err)

    res.status(500).json({msg:'Something went wrong.........Please try again!'})
}

module.exports=errorHandler