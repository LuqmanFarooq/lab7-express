const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyparser = require('body-parser');

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//app.get('/name', (req,res) => {
  //  res.send('hello from get')})
  app.get('/name', (req,res) => {
    console.log(req.query.firstname),
    console.log(req.query.lastname)
    res.send('hello from get '+ req.query.firstname + " " + req.query.lastname);})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/whatever', (req,res) =>{res.send('whatever')})

app.get('/api/movies', (req,res)=>{
    const myMovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
            ];
            res.status(200).json({movies:myMovies,message:'Hello from server'});
})

app.post('/api/movies', (req,res)=>{
    console.log('post request successful')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.poster)
    res.json('post recieved!')})

app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name)
    res.send('hello'+req.params.name);})
    

app.post('/namepost',(req,res)=>{
    console.log(req.body.plastname);
    res.send('hello from post '+ req.body.pfirstname + " " + req.body.plastname);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

