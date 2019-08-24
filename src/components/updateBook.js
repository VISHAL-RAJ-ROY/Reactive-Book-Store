import React, { useState, useEffect } from 'react'

const UpdateBook = props => {

    const [currentBook, setCurrentBook] = useState(props.currentBook)

    const handleChange = event => {
        setCurrentBook({...currentBook, [event.target.name] : event.target.value })
    }

    useEffect(()=>{
        setCurrentBook(props.currentBook)
    }, [props])

    return (
        <form
            onSubmit = {event => {
                event.preventDefault()
                props.updateBook(currentBook.id,currentBook)
            }}
        >
            <label>Name</label>
            <input type = "text" name = "name" value = {currentBook.name} onChange = {handleChange} />
            <label>Author</label>
            <input type = "text" name = "author" value = {currentBook.author} onChange = {handleChange} />
            <br/>
            <button>Update book</button>
            <button onClick={() => props.setEdit(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )

}

export default UpdateBook