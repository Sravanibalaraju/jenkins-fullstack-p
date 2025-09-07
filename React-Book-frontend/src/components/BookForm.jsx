import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend URL on Tomcat port 2030
    axios.post("http://localhost:2030/backend-book-spring/books", { title, author })
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>➕ Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)} required
        />
        <input 
          type="text" placeholder="Author" value={author}
          onChange={(e) => setAuthor(e.target.value)} required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BookForm;
