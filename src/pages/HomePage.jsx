import React from 'react';
import '../css/HomePage.css';
import '../index.css';
import bookDetailsViz from '../js/bookDetailsViz';
import bookDetailsKC from '../js/bookDetailsKC';
import bookDetailsCM from '../js/bookDetailsCM';
import bookDetailsDHC from '../js/bookDetailsDHC';
import bookDetailsOldViz from '../js/bookDetailsOldViz';
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
    bookCardStyles, // Get bookCardStyles
  } = useBookSelection();
  
  const navigate = useNavigate();

  const handleGetChecklist = () => {
    const selectedBooksJSON = JSON.stringify(selectedBooks);
    navigate(`/checklist?books=${encodeURIComponent(selectedBooksJSON)}`);
  };

  

  const renderViz = () => {
    const booksViz = [];
    for (let i = 1; i <= 24; i++) {
      const bookKey = `book${i}`;
      const book = bookDetailsViz[bookKey];
      booksViz.push(
        <div 
          id={bookKey} 
          className="bookcard" 
          key={bookKey} 
          onClick={() => handleBookCardClick(bookKey)}
          style={bookCardStyles[bookKey] || {}} // Apply styles conditionally
        >
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
    return booksViz;
  };

  const renderKC = () => {
    const booksKC = [];
    for (let i = 1; i <= 6; i++) {
      const bookKey = `bookKC${i}`;
      const book = bookDetailsKC[bookKey];
      booksKC.push(
        <div 
          id={bookKey} 
          className="bookcard" 
          key={bookKey} 
          onClick={() => handleBookCardClick(bookKey)}
          style={bookCardStyles[bookKey] || {}} 
        >
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
    return booksKC;
  };


  const renderCM = () => {
    const booksCM = [];
    for (let i = 1; i <= 3; i++) {
      const bookKey = `bookCM${i}`;
      const book = bookDetailsCM[bookKey];
      booksCM.push(
        <div 
          id={bookKey} 
          className="bookcard" 
          key={bookKey} 
          onClick={() => handleBookCardClick(bookKey)}
          style={bookCardStyles[bookKey] || {}} 
        >
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
    return booksCM;
  };

  const renderDHC = () => {
    const booksDHC = [];
    for (let i = 1; i <= 3; i++) {
      const bookKey = `bookDHC${i}`;
      const book = bookDetailsDHC[bookKey];
      booksDHC.push(
        <div 
          id={bookKey} 
          className="bookcard" 
          key={bookKey} 
          onClick={() => handleBookCardClick(bookKey)}
          style={bookCardStyles[bookKey] || {}} 
        >
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
    return booksDHC;
  }

  const renderOldViz = () => {
    const booksOldViz = [];
    for (let i = 1; i <= 10; i++) {
      const bookKey = `bookOldViz${i}`;
      const book = bookDetailsOldViz[bookKey];
      booksOldViz.push(
        <div 
          id={bookKey} 
          className="bookcard" 
          key={bookKey} 
          onClick={() => handleBookCardClick(bookKey)}
          style={bookCardStyles[bookKey] || {}} 
        >
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
    return booksOldViz;
  }


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
          {renderViz()}
        </div>
      )}

      {visibleColumn === 'kc' && (
        <div className='bookcolumn'>
          <div className='buttongroup'>
            <button className='button' onClick={handleSelectAll}>Select all</button>
            <button className='button' onClick={handleUnselectAll}>Unselect all</button>
          </div>
          {renderKC()}
        </div>
      )}

      {visibleColumn === 'comicsOne' && (
        <div className='bookcolumn'>
          <div className='buttongroup'>
            <button className='button' onClick={handleSelectAll}>Select all</button>
            <button className='button' onClick={handleUnselectAll}>Unselect all</button>
          </div>
          {renderCM()}
        </div>
      )}

      {visibleColumn === 'darkHorse' && (
        <div className='bookcolumn'>
          <div className='buttongroup'>
            <button className='button' onClick={handleSelectAll}>Select all</button>
            <button className='button' onClick={handleUnselectAll}>Unselect all</button>
          </div>
          {renderDHC()}
        </div>
      )}

      {visibleColumn === 'oldViz' && (
        <div className='bookcolumn'>
          <div className='buttongroup'>
            <button className='button' onClick={handleSelectAll}>Select all</button>
            <button className='button' onClick={handleUnselectAll}>Unselect all</button>
          </div>
          {renderOldViz()}
        </div>
      )}
      


    </>
  );
}

export default HomePage;
