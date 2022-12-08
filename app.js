let express = require('express')
let load = require('express-load')
let cookieParser = require('cookie-parser')
var session = require('express-session');

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(express.json());
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'));

//app.get('/', routes.index);
//app.get('/usuarios', routes.user.index);

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function () {
    console.log("Ntalk no ar.");
});