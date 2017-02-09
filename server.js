function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
var path = require('path');
var express = require('express')
var app = express()
app.get('/*', function (req, res) {
  var input = req.params[0]
  console.log(input)
  if(input===''){
    res.sendFile(path.join(__dirname + '/index.html'));
  }else if(input.split('')[0].match(/^[0-9]+$/)){
    var natural=timeConverter(input)
    var output = {unix: Number(input), natural: natural}
    res.send(output)
  }
  else{
    
    var unixtime = Date.parse(input)/1000
    var output = {unix: unixtime, natural: input}
    res.send(output)
  }
  
})
app.listen(8080)


