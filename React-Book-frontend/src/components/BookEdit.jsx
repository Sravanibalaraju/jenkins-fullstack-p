import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2030/backend-book-spring/books/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:2030/backend-book-spring/books/${id}`, { title, author })
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>✏️ Edit Book</h3>
      <form onSubmit={handleUpdate}>
        <input 
          type="text" value={title}
          onChange={(e) => setTitle(e.target.value)} required
        />
        <input 
          type="text" value={author}
          onChange={(e) => setAuthor(e.target.value)} required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default BookEdit;
