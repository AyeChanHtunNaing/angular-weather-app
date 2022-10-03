//Install express server
let express=require('express');
let app=express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname+'/dist/weather'));
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/weather/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
