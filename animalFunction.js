function animalfunction (req,res,next){
  let type = req.params.type;

  let animalAry = ["lion","cat","tiger"]

  req.animal = {
    status:"success",
    message: animalAry.includes(type)
  }

  next()
}

module.exports.animalfunction = animalfunction;
