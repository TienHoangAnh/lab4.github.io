var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
  res.render('index');
})

router.get('/', (req, res) => {
  res.render('login');
})

router.post('/login', (req, res) => {
  //save input data to $data variable
  var data = req.body;
  // console.log(data);
  // res.send(data);

  //variable login information
  var username = data.username;
  var password = data.password;
  var check = false;
  var message = null;
  if(username == "admin" && password == "123"){
    // res.send("<h1>Login Successful</h1>");
    check = true;
    message = "Login Successful !"
    res.redirect('/main')
  } else {
    message = "Login Failded !"
    // res.send("<h1>Login Failed</h1>");
    res.redirect('/')
  }
  res.render('result', {message: message})
})

module.exports = router;
