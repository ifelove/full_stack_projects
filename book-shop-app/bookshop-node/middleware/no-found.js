const notFound=(req,res)=>{
res.status(401).send('Page not found')
}

module.exports=notFound