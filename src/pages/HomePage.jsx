import React from 'react';
import '../css/HomePage.css';
import '../index.css';
import bookDetails from '../js/bookDetails';
import { useNavigate } from 'react-router-dom';
import useBookSelection from '../js/useBookSelection';

import viz from '../assets/viz.png';
import kc from '../assets/kc.png';
import darkHorse from '../assets/darkHorse.png';
import comicsOne from '../assets/comicsOne.png';
import oldViz from '../assets/oldViz.png';

function HomePage() {
  const {
    visibleColumn,
    setVisibleColumn,
    selectedBooks,
    handleSelectAll,
    handleUnselectAll,
    handleBookCardClick,
  } = useBookSelection();
  
  const navigate = useNavigate();

  const handleGetChecklist = () => {
    const selectedBooksJSON = JSON.stringify(selectedBooks);
    navigate(`/checklist?books=${encodeURIComponent(selectedBooksJSON)}`);
  };

  const renderBookCards = () => {
    const books = [];
    for (let i = 1; i <= 14; i++) {
      const bookKey = `book${i}`;
      const book = bookDetails[bookKey];
      books.push(
        <div id={bookKey} className="bookcard" key={bookKey} onClick={() => handleBookCardClick(bookKey)}>
          <div className='row'>
            <div className='midsectionleft'>
              <div>
                <h2>{book.title}</h2>
              </div>
              <div>
              <img src={book.image} alt={book.title} className="coverimage" />
              </div>
            </div>
            <div className='midsectionright'>
            <div className='description'>
                <h3> 
                Description
                </h3>
                {book.description}
              </div>
              
            </div>
          </div>
          <div className='bottomrow' style={{ backgroundColor: book.color }}>
            <div>{book.publicationDate}</div>
            <div>{book.isbn}</div>
            <div>{book.format}</div>
          </div>
        </div>
      );
    }
    return books;
  };

  return (
    <>
      <div id="sticky-button">
        <a onClick={handleGetChecklist}>Get Checklist</a>
      </div>

      <div className='header'>
        <h1>Junji Ito Checklist</h1>
      </div>

      <div className='logorow'>
        <img src={viz} alt="VIZ Media" className='logo' onClick={() => setVisibleColumn('viz')} />
        <img src={kc} alt="KC" className='logo' onClick={() => setVisibleColumn('kc')} />
        <img src={comicsOne} alt="Comics One" className='logo' onClick={() => setVisibleColumn('comicsOne')} />
        <img src={darkHorse} alt="Dark Horse" className='logo' onClick={() => setVisibleColumn('darkHorse')} />
        <img src={oldViz} alt="Old VIZ Media" className='logo' onClick={() => setVisibleColumn('oldViz')} />
      </div>

      {visibleColumn === null && (
        <h1 className='welcome main-color'>Welcome to the Junji Ito Checklist! Click on a logo to get started.</h1>
      )}

      {visibleColumn === 'viz' && (
        <div className='bookcolumn'>
          <div className='buttongroup'>
            <button className='button' onClick={handleSelectAll}>Select all</button>
            <button className='button' onClick={handleUnselectAll}>Unselect all</button>
          </div>
          {renderBookCards()}
        </div>
      )}
      
    </>
  );
}

export default HomePage;
