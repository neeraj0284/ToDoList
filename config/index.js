var config=require('./config');
module.exports={getDbConnectionString:function() {
return  'mongodb://'+config.username+':'+config.password+'@ds155132.mlab.com:55132/node_to_do';
}
};
