var express = require('express');
var router = express.Router();

//hiển thị form (GET)
router.get('/', (req, res) =>{
    //render ra file: views/employee/employee.hbs
    res.render('employee/add')
})

//hiển thị dữ liệu từ form (POST)
router.post('/', (req, res) => {
    var employee = req.body;
    //render ra file: views/employee/employee_view.hbs
    res.render('employee/view', {employee : employee})
})

module.exports = router;