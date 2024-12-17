import React, { useState } from 'react';
import './App.css';

function Bookstore() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState('');

  const addBook = () => {
    if (input.trim()) {
      setBooks([...books, { title: input, read: false }]);
      setInput('');
    }
  };

  const toggleReadStatus = (index) => {
    const updatedBooks = books.map((book, i) =>
      i === index ? { ...book, read: !book.read } : book
    );
    setBooks(updatedBooks);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
        
      <header className="header">
        <h1>Bookstore</h1>
        <button type="button" class="btn btn-danger">Welcome</button>
        
      </header>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new book"
        />
         <button onClick={addBook}>Add</button>

        

      </div>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className={book.read ? 'book read' : 'book'}>
            <span onClick={() => toggleReadStatus(index)}>{book.title}</span>
            <button onClick={() => deleteBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookstore;