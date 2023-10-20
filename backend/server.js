const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// JSON database 
// Each article has fields: id, title, author, date, content
const articles = [
    {"id": 0,
     "title": "Lyem's Article",
     "author": "Lyem Ningthou",
     "date": "10-20-23",
     "content": "Lyem's Content",
    },
    {"id": 1,
     "title": "Sofia's Article",
     "author": "Sofia Theodoras",
     "date": "10-20-23",
     "content": "Sofia's Content",
    },
  ]

// Define a GET route to retrieve all articles
app.get('/articles', (req, res) => {
  res.json(articles);
});

// Define a GET route to retrieve a specific article
app.get('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id == req.params.id)
  res.json(article);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
