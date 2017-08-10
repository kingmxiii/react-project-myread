import React from 'react'
import BooksGrid from './BooksGrid'

/**
* @description Functional Component that renders a book shelf
* @prop {array}  bookList - List of Books to be rendered
* @prop {string} title - Book Shelf Title
* @prop {function} onMoveBook - Function that handles Book shelf updates
*/
function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
          <BooksGrid bookList={props.bookList} onMoveBook={props.onMoveBook} />
      </div>
    </div>
  )
}

export default BookShelf
