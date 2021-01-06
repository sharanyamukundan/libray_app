const express = require("express");
const inRouter = express.Router();
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({extended:false});
function router(nav1){
   
    inRouter.get('/',function(req,res){
        res.render("index",{
            nav1,
            title:'Library',
        });
    });
    inRouter.get('/main',function(req,res){
        res.render("main",{
            nav1,
            title:'Library',
        });
    });  
    inRouter.post('/main',urlencodedParser,[

    ],
    check('username').custom(function(value,{req}){
            if(value != 'admin'){
                throw new Error("Username does not match");
            }
    }),
    function(req,res){
        const error = validationResult(req);
        if(!error.isEmpty){
            const alert = error.array();
        }
        User.create({
            username:req.check.username,
            password:req.check.pass
        }).then
        res.render('index',function(res,req){
            alert;
        });
    
    });

    return inRouter;
}

module.exports = router;