import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookEdit from "./components/BookEdit";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
