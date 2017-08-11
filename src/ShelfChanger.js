import React from 'react'

function ShelfChanger(props){
  return(
    <div className="book-shelf-changer">
      <select value={props.shelf} onChange={(e) => props.onMoveBook(props.book, e.target.value)}>
        <option value="nada" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default ShelfChanger
