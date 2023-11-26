
exports.vailduser = (req,res,next) => {
    const{name,email,password} =req.body;
    if(req.body && name && eamil && password){
        next();
    }
    else{
        res.status(404).send({msg:"all input filled are requierd"});
    }
} 