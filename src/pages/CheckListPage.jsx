import React from 'react';
import { useLocation } from 'react-router-dom';
import bookDetailsViz from '../js/bookDetailsViz';
import bookDetailsKC from '../js/bookDetailsKC';
import '../css/CheckListPage.css';

// Combine book details from all sources into a single object
const bookDetails = { ...bookDetailsViz, ...bookDetailsKC };

function ChecklistPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedBooks = JSON.parse(queryParams.get('books')) || [];

  return (
    <div>
      <h1>Selected Books Checklist:</h1>
      <div id="book-list" className='allbookslist'>
        {Object.keys(bookDetails).map(bookId => {
          const book = bookDetails[bookId];
          const isSelected = selectedBooks.includes(bookId);

          return (
            <div key={bookId} className="booklist">
              <div className='listrow'>
                <div className='left'>
                                  
                  <label class="custom-checkbox">
                    <input type="checkbox" checked={isSelected} readOnly />
                    <span class="checkmark"></span>
                  </label>
                  <h3>{book.title}</h3>
                </div>
                <div className='right'>
                <div className='Listdescription'>
                  {book.description}
                </div>
                <div className='midsectionright'>
                  <img src={book.image} alt={`Cover of ${book.title}`} className="coverimagelist" />
                </div>
                <div className='bottomrowlist' style={{ backgroundColor: book.color }}>
                  <div>{book.edition}</div>
                  <div>{book.format}</div>
                  <div>{book.publicationDate} - {book.isbn}</div>
                </div>



               
              </div>
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
