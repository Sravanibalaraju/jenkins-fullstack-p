import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2030/backend-book-spring/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:2030/backend-book-spring/books/${id}`)
      .then(() => setBooks(books.filter(book => book.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>📚 Books List</h3>
      <Link to="/add"><button>➕ Add Book</button></Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} 
            <Link to={`/edit/${book.id}`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
