import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class BookSearch extends Component {
  state = {
    BookList : [],
    searchTerm : ''
  }

  termSearch(term) {
    this.setState ({ searchTerm: term.trim() })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm){
      if (this.state.searchTerm.length > 0){
        BooksAPI.search(this.state.searchTerm, 20).then((BookList) => {
          this.setState({ BookList })
        });
      }
      else {
        this.setState({BookList: []});
      }
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                onChange={(e) => this.termSearch(e.target.value)}
                type="text"
                placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            {this.state.BookList.length < 1 && (
              <h2 className="search-books-header">Search For Books</h2>
            )}
            {this.state.BookList.length > 0 && (
              <BooksGrid bookList={this.state.BookList} onMoveBook={this.props.onMoveBook}/>
            )}
          </div>
        </div>

    )
  }
}

export default BookSearch
