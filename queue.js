function queueThings (req,res,next){
  let query = req.query;
  let queryValue = Object.values(query);
  let lastObj = queryValue[queryValue.length-1]
  let subRoute = req.params.subRoute;
  let queue = [];


  if (subRoute == "enqueue") {
    req.thing = {
      status: "success",
      enqueued: queue.push(lastObj)
    }
  }

  if (subRoute == "peek"){
    req.thing = {
      status: "success",
      data: queue[queue.length-1]
    }
  }

  next()
}



module.exports.queueThings=queueThings
