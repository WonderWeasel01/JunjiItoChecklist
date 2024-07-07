import React from 'react';
import { useLocation } from 'react-router-dom';
import bookDetailsViz from '../js/bookDetailsViz';
import bookDetailsKC from '../js/bookDetailsKC';
import '../css/CheckListPage.css';
import viz from '../assets/viz.png';
import kc from '../assets/kc.png';

// Combine book details from all sources into separate objects
const bookDetailsVizWithSource = Object.keys(bookDetailsViz).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsViz[bookId], source: 'viz' };
  return acc;
}, {});

const bookDetailsKCWithSource = Object.keys(bookDetailsKC).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsKC[bookId], source: 'kc' };
  return acc;
}, {});

const bookDetails = { ...bookDetailsVizWithSource, ...bookDetailsKCWithSource };

function ChecklistPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedBooks = JSON.parse(queryParams.get('books')) || [];



  // Separate the books based on their source
  const booksViz = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'viz');
  const booksKC = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'kc');

  return (
    <div>
      <h1>Selected Books Checklist:</h1>
      <div id="book-list" className='allbookslist'>
        {/* Render Viz books with Viz logo */}
        <div className="logo-container">
          <img src={viz} alt="Viz Logo" className="logo" />
        </div>
        {booksViz.map(bookId => {
          const book = bookDetails[bookId];
          const isSelected = selectedBooks.includes(bookId);

          return (
            <div key={bookId} className="booklist">
              <div className='listrow'>
                <div className='left'>
                  <label className="custom-checkbox">
                    <input type="checkbox" checked={isSelected} readOnly />
                    <span className="checkmark"></span>
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

        {/* Render KC books with KC logo */}
        <div className="logo-container">
          <img src={kc} alt="KC Logo" className="logo" />
        </div>
        {booksKC.map(bookId => {
          const book = bookDetails[bookId];
          const isSelected = selectedBooks.includes(bookId);

          return (
            <div key={bookId} className="booklist">
              <div className='listrow'>
                <div className='left'>
                  <label className="custom-checkbox">
                    <input type="checkbox" checked={isSelected} readOnly />
                    <span className="checkmark"></span>
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
