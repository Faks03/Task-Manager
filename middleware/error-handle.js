const errorHandle = (err,req,res,next) => {
    return res.status(500).json({msg:err})
    // return res.status(500).json({msg:`something went wrong`})
}

module.exports = errorHandle