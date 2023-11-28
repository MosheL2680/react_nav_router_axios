import React from 'react'

const BooksDisp = (props) => {
    return (
        <tr>
            <td>1</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book['publication year']}</td>
        </tr>
    )
}

export default BooksDisp