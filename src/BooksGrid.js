import React from 'react'

function BooksGrid(props) {
  return (
    <ol className="books-grid">
      {props.bookList.map((book) => {
        let coverStyle = {
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail})`
        }
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={coverStyle}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(",")}</div>
              </div>
          </li>
      )})}
    </ol>
  )
}

export default BooksGrid
