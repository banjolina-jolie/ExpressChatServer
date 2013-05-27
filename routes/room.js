var fs = require('fs');

exports.postHandler = function(req, res){
  roomname = req.params.rmnm;
  if (req.body.message) {
    fs.appendFileSync("./data/"+roomname+"msgs.txt", req.body.message+ '\n');
    res.redirect('/' + roomname);
  }
};

exports.getHandler = function(req, res) {
  // console.log("rmnm: ", req.params.rmnm);
  var roomname = req.params.rmnm;
  fs.readFile("./data/rooms.txt", "utf8",function(err, data){
    var rooms = data.split('\n');
    fs.readFile("./data/"+ roomname + "msgs.txt", "utf8", function(error, name){
     var bod = name.split('\n');
      res.render('room', { title: roomname, rooms: rooms, body: bod });
    });
  });

};