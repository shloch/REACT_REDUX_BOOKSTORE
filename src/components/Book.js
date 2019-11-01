import React from 'react';

function Book(props) {
  const { id, title, category } = props.book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button onClick={() => props.onClick(props.index)}> Remove Book </button>
      </td>
    </tr>
  )
}

export default Book;
