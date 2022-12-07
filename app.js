let express = require('express'), routes = require('./routes/home'), app = express();

app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function () {
    console.log(`Ntalk no ar.`)
})


