import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

/**
* @description Component that renders the search page
* @prop {function} onMoveBook - Function that handles Book shelf updates
*/

class BookSearch extends Component {
  state = {
    BookList : [],
    searchTerm : ''
  }

  termSearch = (term) => {
    this.setState ({ searchTerm: term.trim() })
  }

  shelfChange = (book,id) => {
    this.props.onMoveBook(book,id)
    //Update Local State
    this.updateBookList();
  }

  updateBookList = () => {
    BooksAPI.search(this.state.searchTerm, 10).then((books) => {
        /*Get The list of books from search result that are on my
          collection And updates each book shelf value
         */
        const myBooks = _.intersectionBy(this.props.myBooks, books, 'id')
        //Merge updated Books with search result
        const BookList = _.unionBy(myBooks, books, 'id')
        this.setState({ BookList })
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Prevent unnecesary request to the server
    if(prevState.searchTerm !== this.state.searchTerm){
      //Prevent empty query to be send to BookAPI search
      if (this.state.searchTerm.length > 0){
          this.updateBookList();
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
              <BooksGrid bookList={this.state.BookList} onMoveBook={this.shelfChange}/>
            )}
          </div>
        </div>
    )
  }
}

export default BookSearch
