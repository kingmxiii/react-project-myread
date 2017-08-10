import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
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
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} onMoveBook={this.moveBook} />
        )}/>
        <Route path="/search" render={ ( history ) => (
          <BookSearch onMoveBook={this.moveBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
