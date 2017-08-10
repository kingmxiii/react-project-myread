import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    //Add books array to App state
    books:[]
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    //Fetch all books from the server
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      this.fetchBooks()
    })
  }

  render() {
    let currentlyReading = this.state.books.filter(( book ) => book.shelf === 'currentlyReading');
    let wantToRead = this.state.books.filter(( book ) => book.shelf === 'wantToRead');
    let read = this.state.books.filter(( book ) => book.shelf === 'read');
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Reading" bookList={currentlyReading} onMoveBook={this.moveBook} />
                <BookShelf title="Want To Read" bookList={wantToRead} onMoveBook={this.moveBook} />
                <BookShelf title="Read" bookList={read} onMoveBook={this.moveBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={ ( history ) => (
          <BookSearch onMoveBook={this.moveBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
