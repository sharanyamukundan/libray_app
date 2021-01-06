const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {check,validationResult} = require("express-validator");
const nav = [
{
     link:'/main',name:'Home'
},
{
    link:'/books', name:'Books'
},
{
    link:'/authors',name:'Author'
},
{
    link:'/bookadd',name:'Add Book'
}
];
const nav1 = [{
    link:'/index',name:'Login'
},
{
    link:'/signup',name:'SignUp'
}];
const booksRouter = require("./src/routes/booksRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const inRouter = require("./src/routes/inRoutes")(nav1);
const indexRouter = require("./src/routes/indexRoutes")(nav);
const upRouter = require("./src/routes/upRoutes")(nav1);
const addRouter = require("./src/routes/addRoutes")(nav);
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/index',inRouter);
app.use('/main',indexRouter);
app.use('/signup',upRouter);
app.use('/bookadd',addRouter);
app.get('/',function(req,res){
    res.render("index",{
        nav1,
        title:'Library'
    });
});


app.listen(5000);