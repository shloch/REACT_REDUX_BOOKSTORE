import React from 'react'

function Book(props) {
  return (
    <tr>
      <td>{props.book.id}</td>
      <td>{props.book.title}</td>
      <td>{props.book.category}</td>
    </tr>
  )
}

export default Book;
