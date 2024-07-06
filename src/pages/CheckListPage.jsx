import React from 'react';
import { useLocation } from 'react-router-dom';

import bookDetailsViz from '../js/bookDetailsViz';
import bookDetailsKC from '../js/bookDetailsKC';

// Combine book details from all sources into a single object
const bookDetails = { ...bookDetailsViz, ...bookDetailsKC };

function ChecklistPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const books = JSON.parse(queryParams.get('books'));

  return (
    <div>
      <h1>Selected Books Checklist</h1>
      <div id="book-list">
        {books.map(bookId => {
          const book = bookDetails[bookId];
          if (!book) return null; // In case bookId is not found in bookDetails

          return (
            <div key={bookId} className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>{book.title}</h1>
                  </div>
                  <div className='description'>
                    {book.description}
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={book.image} alt={`Cover of ${book.title}`} className="coverimage" />
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: book.color }}>
                <div>{book.edition}</div>
                <div>{book.format}</div>
                <div>{book.publicationDate} - {book.isbn}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}

export default ChecklistPage;
