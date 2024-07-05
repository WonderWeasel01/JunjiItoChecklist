import { useState } from 'react';

const useBookSelection = () => {
  const [visibleColumn, setVisibleColumn] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSelectAll = () => {
    const bookcards = document.querySelectorAll('.bookcard');
    const bookIds = Array.from(bookcards).map(bookcard => bookcard.id);
    setSelectedBooks(bookIds);

    // Apply red border to all book cards
    bookcards.forEach(bookcard => {
      bookcard.style.border = '2px solid red';
    });
  };

  const handleUnselectAll = () => {
    setSelectedBooks([]);

    // Remove red border from all book cards
    const bookcards = document.querySelectorAll('.bookcard');
    bookcards.forEach(bookcard => {
      bookcard.style.border = 'none';
    });
  };

  const handleBookCardClick = (bookId) => {
    setSelectedBooks(prevSelectedBooks => {
      if (prevSelectedBooks.includes(bookId)) {
        document.getElementById(bookId).style.border = 'none';
        return prevSelectedBooks.filter(id => id !== bookId);
      } else {
        document.getElementById(bookId).style.border = '2px solid red';
        return [...prevSelectedBooks, bookId];
      }
    });
  };

  return {
    visibleColumn,
    setVisibleColumn,
    selectedBooks,
    handleSelectAll,
    handleUnselectAll,
    handleBookCardClick,
  };
};

export default useBookSelection;
