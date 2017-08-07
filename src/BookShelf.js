import React from 'react'
import BooksGrid from './BooksGrid'

function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
          <BooksGrid bookList={props.bookList} />
      </div>
    </div>
  )
}

export default BookShelf
