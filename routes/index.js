var fs = require('fs');

exports.index = function(req, res){
  fs.readFile("./data/msgs.txt", 'utf8', function(err, data){
    var messages = data.split('\n');
    res.render('index', { title: 'Chats', body: messages });
  });
};

exports.postHandler = function(req, res){
  if (req.body.message) {
    fs.appendFileSync("./data/msgs.txt", req.body.message+ '\n');
    res.redirect('/');
  }
  if (req.body.room) {
    fs.appendFileSync("./data/rooms.txt", req.body.room+ '\n');
    res.redirect( '/' + req.body.room);
  }
};


