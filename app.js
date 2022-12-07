let express = require('express'), routes = require('./routes');

let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

app.listen(3000, () => {
    console.log(`Ntalk no ar.`)
})
