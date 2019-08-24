import React from 'react'

const BookList = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.length > 0 ? (
                        props.list.map( item => (
                            <tr key = {item.id}>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>
                                    <button className = "button muted-button">Edit</button>
                                    <button onClick = {()=>props.deleteBook(item.id)} className = "button muted-button">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr> 
                            <td colSpan={3}>No Books!</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default BookList