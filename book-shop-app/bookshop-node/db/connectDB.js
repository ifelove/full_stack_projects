const mongoose=require('mongoose')

const connectDB=(url)=>{
    return mongoose.connect(url).then((res)=>{console.log('connected to DB')})
}

module.exports=connectDB