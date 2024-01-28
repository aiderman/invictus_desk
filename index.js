const express = require('express');
const app = express()
const port = 3333
 app.use(express.json())

 
const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationYear: 1925
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationYear: 1937
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951
    }
  ];
  
app.get('/',(req,res)=> {
    res.json({mesage:"ini json value"})
    res.send("update hello im here")
});

app.get('/books',(req,res)=> {
    const data=books
    const result={
        status:'ok',
        data:data
    }
    res.json(result)
});
app.get('/about',(req,res)=> {
    res.send('<h2>ini adalah about</h2>')
});
app.get('/user/:id',(req,res)=> {
    const {id} = req.params
    res.send(`im here user ${id}`)
});

app.listen(port,()=> console.log(`update server running on port ${port}`))