
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.postHandler = function(req, res){
  fs.appendFileSync("./data/rooms.txt", req.body.room+ '\n');
  res.redirect('/');
};
