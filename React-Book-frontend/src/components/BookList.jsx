import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/books/${id}`)
      .then(() => setBooks(books.filter(book => book.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>📖 All Books</h3>
      {books.length === 0 ? <p>No books available.</p> : (
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Title</th><th>Author</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to={`/edit/${book.id}`}>✏️ Edit</Link>
                  {" | "}
                  <button onClick={() => deleteBook(book.id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
