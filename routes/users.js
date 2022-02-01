var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/user');
const Assignment = require("../model/assignment");



function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body._id);
    Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({message: 'updated'})
        }

        
    });

}


module.exports = router;