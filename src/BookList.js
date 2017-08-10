import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function BookList(props){
  let currentlyReading = props.books.filter(( book ) => book.shelf === 'currentlyReading');
  let wantToRead = props.books.filter(( book ) => book.shelf === 'wantToRead');
  let read = props.books.filter(( book ) => book.shelf === 'read');
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Reading" bookList={currentlyReading} onMoveBook={props.onMoveBook} />
          <BookShelf title="Want To Read" bookList={wantToRead} onMoveBook={props.onMoveBook} />
          <BookShelf title="Read" bookList={read} onMoveBook={props.onMoveBook} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default BookList
