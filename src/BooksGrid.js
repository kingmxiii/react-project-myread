import React from 'react'
import ShelfChanger from './ShelfChanger'
import NoCover from './img/nocover.png'


/**
* @description Functional Component that renders the list of books provided
* @prop {array}  bookList - List of Books to be rendered
* @prop {function} onMoveBook - Function that handles Book shelf updates
*/

function BooksGrid(props) {
  return (
    <ol className="books-grid">
      {props.bookList.map((book) => {
        const { imageLinks, shelf, authors, id, title } = book
        //Set the style for the book cover
        const bookCover = (imageLinks) ? imageLinks.thumbnail : NoCover;
        const coverStyle = {
          backgroundImage: `url(${bookCover})`
         }
        //Get current Book Shelf value
        const bookShelf = (shelf) ? shelf : 'none' ;
        //Setting author
        const bookAuthors = (authors) ? authors.join(" - ") : '';
        return(
          <li key={id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={coverStyle}></div>
                  <ShelfChanger book={book} shelf={bookShelf} onMoveBook={props.onMoveBook} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{bookAuthors}</div>
              </div>
          </li>
      )})}
    </ol>
  )
}

export default BooksGrid
