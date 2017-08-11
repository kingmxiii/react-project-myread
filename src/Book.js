import React from 'react'
import NoCover from './img/nocover.png'

function Book(props) {
  const { imageLinks, shelf, authors, title } = props.book
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
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={coverStyle}></div>
        <div className="book-shelf-changer">
          <select value={bookShelf} onChange={(e) => props.onMoveBook(props.book, e.target.value)}>
            <option value="nada" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
       </div>
       <div className="book-title">{title}</div>
       <div className="book-authors">{bookAuthors}</div>
      </div>
  )
}

export default Book
