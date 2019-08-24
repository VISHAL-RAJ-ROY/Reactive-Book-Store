import React, { useState } from 'react'
import UpdateBook from './components/updateBook'
import BookList from './components/bookList'
import AddBook from './components/addBook'

const App = () => {

  const initialList = [
    { id : 1, name : 'Principles', author : 'Ray Dalio' },
    { id : 2, name : 'Four Hour Workweek', author : 'Tim Ferriss' },
    { id : 3, name : 'The Lean Startup', author : 'Eric Ries' }
  ]

  const [bookList, setBookList] = useState(initialList)

  const deleteBook = bookId => setBookList(bookList.filter(item => item.id !== bookId))

  const addBook = book => {
    book.id = bookList.length+1
    setBookList([...bookList, book])
  }

  return (
    <div className="container">
      <h1>Reactive Book Store</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Book</h2>
          <AddBook addBook = {addBook} />
        </div>
        <div className="flex-large">
          <h2>View Book</h2>
          <BookList list = {bookList} deleteBook = {deleteBook} />
        </div>
      </div>
    </div>
  )

}

export default App