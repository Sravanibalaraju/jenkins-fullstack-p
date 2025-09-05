import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 Book Manager</h2>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/add">Add Book</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
