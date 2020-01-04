var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'incedohrm.c5dl17d1gerr.us-east-2.rds.amazonaws.com',
  user     : 'incedohrm',
  password : 'incedohrm',
  database : 'incedo_hrm'
});

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + con.threadId);
});
module.exports = con;