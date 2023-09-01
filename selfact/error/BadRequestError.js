const {StatusCodes}=require("http-status-codes")
const CustomError=require("./CustomError")

class BadRequestError extends CustomError{
    constructor(message){
super(message)
this.statusCodes=StatusCodes.BAD_REQUEST
    }
}

module.exports=BadRequestError