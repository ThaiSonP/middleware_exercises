function generateSpread(req,res,next){
  let response = req.query;
  let valueAry = Object.values(response);
  
  let intAry = []
  valueAry.forEach(el=>{
    intAry.push(parseInt(el))
  })

  let rangeAry = []
  for(let i =intAry[0];i<=intAry[1];i++){
    rangeAry.push(i)
  }
  let random = rangeAry[Math.floor(Math.random()*rangeAry.length-1)]

  req.response = {
    status:"sucess",
    range: intAry.join(", "),
    randPick:random,
  }

  next()
}



module.exports.generateSpread=generateSpread
