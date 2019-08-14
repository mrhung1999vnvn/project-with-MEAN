const todoModel=require('../model/index');

module.exports = async(req,res,next)=>{
    var todoItem=new todoModel({
        text:req.body.text,
        done:false
    });
    await todoItem.save()
    .then(async()=>{
        await todoModel.find()
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            next(err);
        })
    })
    .catch(err=>{
        next(err);
    })
    

}