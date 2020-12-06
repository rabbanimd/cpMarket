const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes = require('./routes/admin.js');
const homeRoutes = require('./routes/home');
app.use(adminRoutes);
app.use(homeRoutes);

app.use((req,res,next)=>{
    res.sendFile((path.join(__dirname,'view','404.html')));
})
/**
 * when we use 'get' for routing the provided url is matched completely when a request is made.
 * if server do not find any url mapping, node omit 'cannot get {url-provided}'.
 * To avoid this, provided we are bound to use '/' get or post, we can always add a page 404
 * <!----- code ----->
 *     app.user(req,res,next)=>{
 *         res.status(404).send(<h3>Page Not Found</h3>)
 *     })
 */



// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);