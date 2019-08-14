const express=require('express');
const route=express.Router();

const getRoute=require('../controller/getRoute');
route.get('/api/todos',getRoute);

const postRoute=require('../controller/postRoute');
route.post('/api/todos',postRoute);

const deleRoute=require('../controller/deleteRoute');
route.delete('/api/todos/:id',deleRoute);

module.exports=route;