import React from 'react'

/**
* @description Functional Component that renders the list of books provided
* @prop {array}  bookList - List of Books to be rendered
* @prop {function} onMoveBook - Function that handles Book shelf updates
*/

function BooksGrid(props) {
  return (
    <ol className="books-grid">
      {props.bookList.map((book) => {
        //Set the style for the book cover
        let coverStyle = {
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail})`
         }
        //Get current Book Shelf value
        let shelf = (book.shelf === undefined) ? 'none' : book.shelf;
        //Setting author
        let authors = (book.authors === undefined) ? '' : book.authors.join(" - ");
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={coverStyle}></div>
                  <div className="book-shelf-changer">
                    <select value={shelf} onChange={(e) => props.onMoveBook(book, e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>
              </div>
          </li>
      )})}
    </ol>
  )
}

export default BooksGrid
