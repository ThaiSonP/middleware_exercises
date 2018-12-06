const express = require('express')
const app = express()
const port = 3000
const animal = require("./animalFunction.js")
const random = require("./random.js")
const queue = require('./queue.js')

app.get('/animal/:type', animal.animalfunction,(req,res)=>{
  res.json(req.animal)
})

app.get("/random",random.generateSpread,(req,res)=>{
  res.json(req.response)
})

app.get("/queue/:subRoute", queue.queueThings,(req,res)=>{
  res.json(req.thing)
})

app.listen(port,()=>{
  console.log('app is working')
})
