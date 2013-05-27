var fs = require('fs');

exports.index = function(req, res){
  fs.readFile("./data/rooms.txt", 'utf8', function(err, data){
    var rooms = data.split('\n');
    res.render('index', { title: 'Select a Chatroom', rooms: rooms, body: "text" });
  });
};

exports.postHandler = function(req, res){
  // if (req.body.message) {
  //   fs.appendFileSync("./data/msgs.txt", req.body.message+ '\n');
  //   res.redirect('/');
  // }
  if (req.body.room) {
    if (!"./data" + req.body.room + "msgs") {
      fs.appendFileSync("./data/rooms.txt", req.body.room+ '\n');
      fs.writeFileSync(__dirname + "/../data/" + req.body.room + "msgs.txt");
    }
    res.redirect('/');
  }
};
