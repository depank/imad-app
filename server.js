var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').Pool;

var config={
    user:'rasdeep203',
    database:'rasdeep203',
    host:'db.imad.hasura-app.io',
    port:5432,
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
 
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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

var pool=new pool(config);

function createTemplet(data){
    try{
var title=data.title;
var date=data.date;
var content=data.content;
var heading=data.heading;
var author=data.author;
var id=data.id;



var htmlTemplet=`

<!doctype html>

<head>
    <meta name="viewport" content="width=device-width,initial-scale-1">
    <link href="/ui/article.css" rel="stylesheet" />

    <title>
        ${title}
    </title>
</head>
<body>
    <div class="container">
        <a href="/">Home</a>
        <hr>
        <div class="center">
        <h id="heading">
        ${heading}</h></div>
         <div>
                ${date.toDateString()}
         </div>
        <div id="article_id" hidden>${id}</div>
        <div class="center">
        
         <div>
             ${content}
         </div>
        </div>
        <div class="align_right">By:&nbsp&nbsp${author}</div>
        <hr>
               <div>COMMENT:
              <input type="text" id="comment">&nbsp&nbsp&nbsp
              <input type="button" value="submit" id="submit_btn">
              </div>
              <div>
              <ol id="list_cmnt"></ol></div>
     <script src="/ui/main.js" rel="script/javascript"></script>
 
</div>
</body>
</html>




`;
        return htmlTemplet;
    }
catch(err){
 return "ERROR ARTICLE DOES NOT EXIST"; 
}

}

 

app.get('/test_db', function (req, res) {
pool.query('SELECT * FROM test',function(err,result){
    
    if(err){
        res.status(500).send(err.toString());
    }
    else {
        res.send(JSON.stringify(result.rows));
    }
    
    
});
});


app.get('/submit',function(req,res){
    var allComment=[];
    var comment=req.param('cmnt');
    var id=req.param('id');
    allComment.push(comment);
    
    pool.query("SELECT comment FROM comments  WHERE id=$1",[id],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else if(result.rows.length === 0){
           res.status(404).send("Article not found");
       }
       else{
           //res.send(result.rows[0].comment);
           
           for(var i=0;i<result.rows.length;i++)
           {allComment.push(result.rows[i].comment);}
            res.send(JSON.stringify(allComment));
       }
   });
    
    
    
    
    
    
     pool.query("INSERT  INTO comments VALUES($1,$2)",[id,comment],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
     }
     );
     
       
     
   // res.send(JSON.stringify(allComment));
    
});

app.get('/api/users',function(req,res){
    var id=req.param('id');
    var tag=req.param('tag');
    var token=req.param('token');

   
    res.send("hii"+id+tag+token);
    
});





app.get('/articles/:articleName',function(req,res){
   pool.query("SELECT * FROM article  WHERE title= $1",[req.params.articleName],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else if(result.rows.length === 0){
           res.status(404).send("Article not found");
       }
       else{
           var articleData=result.rows[0];
            res.send(createTemplet(articleData));
       }
   });
   
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
