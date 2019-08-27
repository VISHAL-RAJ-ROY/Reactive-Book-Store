import React, { useState } from 'react'

const AddBook = props => {

    const initialBook = {
        id : null,
        name : '',
        author : '' 
    }

    const [book, setBook] = useState(initialBook)

    const handleChange = event => {
        setBook({...book, [event.target.name] : event.target.value })
    }

    return (
        <form
            onSubmit = {event => {
                event.preventDefault()
                if( book.name === '' || book.author === '' ) return
                props.addBook(book)
                setBook(initialBook)
            }}
        >
            <label>Name</label>
            <input type = "text" name = "name" value = {book.name} onChange = {handleChange} />
            <label>Author</label>
            <input type = "text" name = "author" value = {book.author} onChange = {handleChange} />
            <br/>
            <button>Add new book</button>
        </form>
    )

} 

export default AddBook;