const express= require('express');
const todoModel=require('../model/index');

module.exports= async(req,res,next)=>{
    await todoModel.find()
    .then((result)=>{
        res.json(result);
    })
    .catch(err=>{
        next(err);
    });
}