import React from 'react'
import { connect } from "react-redux";
import Book from "../components/Book";
import PropTypes from 'prop-types'


function BooksList(props) {
  return (
    <table>
      <thead>
      <tr>
        <td>Book ID</td>
        <td>Title</td>
        <td>Category</td>
      </tr>
      </thead>
      <tbody>
        {
          props.books.map((book, index) => {
            return (
              <Book key={index} book={book} />
            )
          })
        }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired  
}

export default connect(mapStateToProps, null)(BooksList)
