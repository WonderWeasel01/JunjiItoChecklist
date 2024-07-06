import { useState, useEffect } from 'react';

const useBookSelection = () => {
  const [visibleColumn, setVisibleColumn] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [bookCardStyles, setBookCardStyles] = useState({}); // Store styles for book cards

  const handleSelectAll = () => {
    const bookcards = document.querySelectorAll('.bookcard');
    const bookIds = Array.from(bookcards).map(bookcard => bookcard.id);
    setSelectedBooks(bookIds);

    const newStyles = {};
    bookIds.forEach(bookId => {
      newStyles[bookId] = { border: '2px solid red' };
    });
    setBookCardStyles(newStyles);
  };

  const handleUnselectAll = () => {
    setSelectedBooks([]);
    setBookCardStyles({});
  };

  const handleBookCardClick = (bookId) => {
    setSelectedBooks(prevSelectedBooks => {
      const newStyles = { ...bookCardStyles };
      if (prevSelectedBooks.includes(bookId)) {
        delete newStyles[bookId];
        document.getElementById(bookId).style.border = 'none';
        return prevSelectedBooks.filter(id => id !== bookId);
      } else {
        newStyles[bookId] = { border: '2px solid red' };
        document.getElementById(bookId).style.border = '2px solid red';
        return [...prevSelectedBooks, bookId];
      }
    });
    setBookCardStyles(prev => {
      const newStyles = { ...prev };
      if (selectedBooks.includes(bookId)) {
        delete newStyles[bookId];
      } else {
        newStyles[bookId] = { border: '2px solid red' };
      }
      return newStyles;
    });
  };

  useEffect(() => {
    selectedBooks.forEach(bookId => {
      const bookCard = document.getElementById(bookId);
      if (bookCard) {
        bookCard.style.border = '2px solid red';
      }
    });
  }, [visibleColumn, selectedBooks]);

  return {
    visibleColumn,
    setVisibleColumn,
    selectedBooks,
    handleSelectAll,
    handleUnselectAll,
    handleBookCardClick,
    bookCardStyles, // Return bookCardStyles
  };
};

export default useBookSelection;
