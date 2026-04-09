import React, { createContext, useState } from 'react'


export const BookContext = createContext()

const BookProvider = ({children}) => {


   const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    console.log(currentBook);
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert("The Book is already exist.");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} is added to the list`)
    }
  };

  const data = {
    storedBooks, setStoredBooks,handleMarkAsRead,
  }


  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
}

export default BookProvider
