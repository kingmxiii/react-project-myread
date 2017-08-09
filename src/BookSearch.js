import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class BookSearch extends Component {
  state = {
    BookList : [],
    searchTerm : ''
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            {this.state.BookList.length < 1 && (
              <h2 className="search-books-header">Search For Books</h2>
            )}
            {this.state.BookList.length > 0 && (
              <BooksGrid bookList={this.state.BookList}/>
            )}
          </div>
        </div>

    )
  }
}

export default BookSearch
