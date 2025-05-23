import { useNavigate } from 'react-router-dom';
import "../styles/Search.css";
import axios from 'axios';
import { useState } from 'react';
import BookCard from './BookCard'

function Search({ placeholde = "Search for Book..." }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSearch() {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");

    const url = `/search.json?q=${searchTerm}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.docs || []);
    } catch (error) {
      console.error("Search failed:", error);
      setError("Something went wrong while fetching books.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
    {!loading && error==="" && books.length === 0 && searchTerm && (
          <p>No books found for "{searchTerm}"</p>
    )}
  }



  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      navigate("/");
    }
    if (event.key === "Enter") {
      handleSearch();
    }
    if (event.key === "Backspace" || event.key === "Delete" || searchTerm.trim()==="" ){
      setError("")
      setBooks([])
    }
  }

  return (
    <div className="Search-container">
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleKeyDown(e);
        }}
        value={searchTerm}
        autoFocus
        className="form-control mr-sm-2"
        placeholder={placeholde}
        aria-label="Search"
      />

      <div className="results books-grid">
        {loading && <p>Searching...</p>}
        {error && <p className="error">{error}</p>}

        {books.length > 0 && books.map((book, index) => (
          <BookCard key={book.key || index} bok={book} />
        ))}
        
      </div>
    </div>
  );
}

export default Search;
