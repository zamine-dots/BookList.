import React from 'react';

function BookCard({ bok, indx }) {
  const coverUrl = `https://covers.openlibrary.org/b/id/${bok.cover_i}-M.jpg`;
  return (
    <div className="card" key={indx} style={{ width: '18rem'  }}>
      <img src={coverUrl} className="card-img-top" alt={bok.title} />
      <div className="card-body"style={{ backgroundColor:'#000000'  }}>
        <p className="card-text" style={{color:'white'}}>{bok.author_name || "Unknown Author"}</p>
      </div>
    </div>
  );
}

export default BookCard;
