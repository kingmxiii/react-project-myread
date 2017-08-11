import React from 'react'
import Book from './Book'

/**
* @description Functional Component that renders the list of books provided
* @prop {array}  bookList - List of Books to be rendered
* @prop {function} onMoveBook - Function that handles Book shelf updates
*/

function BooksGrid(props) {
  return (
    <ol className="books-grid">
      {props.bookList.map((book) => {

        return(
          <li key={book.id}>
            <Book book={book} onMoveBook={props.onMoveBook}/>
          </li>
      )})}
    </ol>
  )
}

export default BooksGrid
