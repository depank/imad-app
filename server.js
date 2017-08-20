var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
 
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/isro/css/common.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','css','common.css'));
});



app.get('/ui/isro/css/home.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','css','home.css'));
});



app.get('/ui/isro/script/home.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','script','home.js'));
});


app.get('/isro/',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','isro', 'speedpost.html'));
});

app.get('/new_isro/',function(req,res){
    res.sendFile(path.join(__dirname, 'ui','isro', 'new_home.html'));
});

app.get('/isro/send', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','new_send.html'));
});

app.get('/ui/isro/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','contact.html'));
});

app.get('/ui/isro/notice.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','notice.html'));
});





app.get('/ui/isro/img/logo.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','logo.ico'));
});

app.get('/ui/isro/img/logo1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','logo1.png'));
});

app.get('/ui/isro/img/home1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','home1.jpg'));
});
app.get('/ui/isro/img/home2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','home2.jpg'));
});
app.get('/ui/isro/img/home3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','home3.jpg'));
});
app.get('/ui/isro/img/home4.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','home4.jpg'));
});
app.get('/ui/isro/img/home5.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isro','img','home5.jpg'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.css'));
});

var articleone={
    date:'5/10/2017',
    title:'first article',
    content:'hii its first one in series',
    heading:"first article"
};






function createTemplet(data){
var title=data.title;
var date=data.date;
var content=data.content;
var heading=data.heading;
var htmlTemplet=`

<!doctype html>

<head>
    <meta name="viewport" content="width=device-width,initial-scale-1">
    <link href="/ui/article.css" rel="stylesheet" />
    <title>
        $(title)
    </title>
</head>
<body>
    <div class="container">
        <a href="/">Home</a>
        <hr>
        <h>
        $(heading)</h>
        <div class="center">
         <div>
             $(date)
         </div>
         <div>
             $(contents)
         </div>
            
        </div>
 </div>
</body>
</html>




`;
return htmlTemplet;
}

app.get('/articleone',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', createTemplet(articleone)));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
