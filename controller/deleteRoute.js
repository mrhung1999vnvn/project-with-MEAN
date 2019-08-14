const todoModel=require('../model/index');


module.exports=async(req,res,next)=>{
    await todoModel.deleteMany(req.params.id)
    .then(async()=>{
        await todoModel.find()
        .then((todos)=>{
            res.json(todos);
        })
        .catch(err=>{
            next(err);
        })
    })
    .catch(err=>{
        next(err);
    })
}