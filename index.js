const express = require('express');
const app = express();
const keys = require('./config/keys')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI)

app.use(
    cookieSession({
        maxAge:30*24*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());



require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("move to "+ port);
})

