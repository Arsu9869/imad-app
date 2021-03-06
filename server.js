var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles : {

'article-one' : {
  title: 'article one ramesh',
  heading: 'article-one',
  date: 'aug 24,2017',
  content: `
        <p>
            this is the content for my first article 
            this is the content for my first article 
            this is the content for my first article 
            this is the content for my first article 
        </p> 
        },
 'article-two' :
{
    title: 'article two ramesh',
    heading: 'article-two',
    date: 'aug 30,2017',
    content: 
        <p>
            this is the content for my second article 
            this is the content for my second article 
            this is the content for my second article 
            this is the content for my second article 
        </p>
        };
function createTemplate(data)
{
    var title = data.title;
    var date =data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
    <html>
        <head>
          <title>
             ${title}
          </title>
          <meta name="viewport" content="width = device-width, initial-scale=1">
        
          <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
        <body>
          <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
            <hr>
            <h3>
            ${heading}
            </h3>
            <div>
            ${date}
            </div>
            <div>
            <p>
            ${content}
            </p>
             </div>
        </div>
    </body>
</html> ;
return htmlTemplate;







    
}

app.get('/articleName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res)
{
  res.send(createTemplte(articleOne);
});
var articleName = req.params.articleName
res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
