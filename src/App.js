import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    //Add books array to App state
    books:[],
    showSearchPage: true
  }

  componentDidMount() {
    //Fetch all books from the server
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }



  render() {
    let currentlyReading = this.state.books.filter(( book ) => book.shelf === 'currentlyReading');
    let wantToRead = this.state.books.filter(( book ) => book.shelf === 'wantToRead');
    let read = this.state.books.filter(( book ) => book.shelf === 'read');
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Reading" bookList={currentlyReading} />
                <BookShelf title="Want To Read" bookList={wantToRead} />
                <BookShelf title="Read" bookList={read} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
