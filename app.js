var express=require('express');
var app=express();
var mongoose=require('mongoose');
var config=require('./config');
var setupControls=require('./controllers/setupControls');
var apiController=require('./controllers/apiController');


app.set('view engine','ejs');
app.use('/assests',express.static(__dirname+'/public'));


var port=process.env.PORT||3000;

mongoose.connect(config.getDbConnectionString());
setupControls(app);
apiController(app);
app.listen(port);
