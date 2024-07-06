// ChecklistPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import bookDetails from '../js/bookDetailsViz';

function ChecklistPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const books = JSON.parse(queryParams.get('books'));

  return (
    <div>
      <h1>Selected Books Checklist</h1>
      <div id="book-list">
        {books.map(bookId => (
          <div key={bookId} className="bookcard">
            <div className='row'>
              <div className='midsectionleft'>
                <div>
                  <h1>{bookDetails[bookId].title}</h1>
                </div>
                <div className='description'>
                  {bookDetails[bookId].description}
                </div>
              </div>
              <div className='midsectionright'>
                <img src={bookDetails[bookId].image} alt={`Cover of ${bookDetails[bookId].title}`} className="coverimage" />
              </div>
            </div>
            <div className='bottomrow' style={{ backgroundColor: '#D0282F' }}>
              <div>{bookDetails[bookId].edition}</div>
              <div>{bookDetails[bookId].format}</div>
              <div>{bookDetails[bookId].publicationDate} - {bookDetails[bookId].isbn}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}

export default ChecklistPage;
