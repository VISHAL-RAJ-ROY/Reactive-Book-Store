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

  const initialBook = {id : null, name : '', author : ''}

  const [bookList, setBookList] = useState(initialList)
  const [isEditMode, setEdit] = useState(false)
  const [currentBook, setCurrentBook] = useState(initialBook)

  const deleteBook = bookId => {
    setEdit(false)
    setBookList(bookList.filter(item => item.id !== bookId))
  }

  const updateBook = (id, book) => {
    setEdit(false)
    setBookList(bookList.map( item => (item.id === id ? book : item )))
  }

  const editRow = book => {
    setEdit(true)
    setCurrentBook({id: book.id, name : book.name, author : book.author})
  }

  const addBook = book => {
    book.id = bookList.length+1
    setBookList([...bookList, book])
  }

  return (
    <div className="container">
      <h1>Reactive Book Store</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>{ isEditMode ? "Edit" : "Add" } Book</h2>
          {
            ( !isEditMode ? (  
              <AddBook addBook = {addBook} />
            ) : (
              <UpdateBook updateBook = {updateBook} currentBook = {currentBook} setEdit = {setEdit} />
            ))
          }
        </div>
        <div className="flex-large">
          <h2>View Book</h2>
          <BookList editRow = {editRow} list = {bookList} deleteBook = {deleteBook} />
        </div>
      </div>
    </div>
  )

}

export default App