import React from 'react';
import { useLocation } from 'react-router-dom';

import bookDetailsViz from '../js/bookDetailsViz';
import bookDetailsKC from '../js/bookDetailsKC';
import bookDetailsCM from '../js/bookDetailsCM';
import bookDetailsDHC from '../js/bookDetailsDHC';
import bookDetailsOldViz from '../js/bookDetailsOldViz';

import '../css/CheckListPage.css';

import viz from '../assets/viz.png';
import kc from '../assets/kc.png';
import cm from '../assets/comicsOne.png';
import dhc from '../assets/darkHorse.png';
import oldViz from '../assets/oldViz.png';

// Combine book details from all sources into separate objects
const bookDetailsVizWithSource = Object.keys(bookDetailsViz).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsViz[bookId], source: 'viz' };
  return acc;
}, {});

const bookDetailsKCWithSource = Object.keys(bookDetailsKC).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsKC[bookId], source: 'kc' };
  return acc;
}, {});

const bookDetailsCMWithSource = Object.keys(bookDetailsCM).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsCM[bookId], source: 'cm' };
  return acc;
}, {});

const bookDetailsDHCWithSource = Object.keys(bookDetailsDHC).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsDHC[bookId], source: 'dhc' };
  return acc;
}, {});

const bookDetailsOldVizWithSource = Object.keys(bookDetailsOldViz).reduce((acc, bookId) => {
  acc[bookId] = { ...bookDetailsOldViz[bookId], source: 'OldViz' };
  return acc;
}, {});

const bookDetails = { ...bookDetailsVizWithSource, ...bookDetailsKCWithSource, ...bookDetailsCMWithSource , ...bookDetailsDHCWithSource, ...bookDetailsOldVizWithSource};

function ChecklistPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedBooks = JSON.parse(queryParams.get('books')) || [];



  // Separate the books based on their source
  const booksViz = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'viz');
  const booksKC = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'kc');
  const booksCM = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'cm');
  const booksDHC = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'dhc');
  const booksOldViz = Object.keys(bookDetails).filter(bookId => bookDetails[bookId].source === 'OldViz');

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

        {/* Render CM books with CM logo */}
        <div className="logo-container">
          <img src={cm} alt="CM Logo" className="logo" />
        </div>
        {booksCM.map(bookId => {
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

        {/* Render DHC books with DHC logo */}
        <div className="logo-container">
          <img src={dhc} alt="DHC Logo" className="logo" />
        </div>
        {booksDHC.map(bookId => {
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

        {/* Render OldViz books with OldViz logo */}
        <div className="logo-container">
          <img src={oldViz} alt="OldViz Logo" className="logo" />
        </div>
        {booksOldViz.map(bookId => {
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
