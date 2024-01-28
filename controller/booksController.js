
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

const findAllBooks=(req, res)=> {
    const data=books
        const result={
            status:'ok',
            data:data
        }
        res.json(result)
}

module.exports ={findAllBooks}