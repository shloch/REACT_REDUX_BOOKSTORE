import React from 'react';
import '../App.css';
import BooksList from "../containers/BooksList";
import BooksForm from "../containers/Booksform";

function App() {
  return (
    <div className="panel-bg">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
