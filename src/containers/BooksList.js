import React from 'react'
import { connect } from "react-redux";
import Book from "../components/Book";
import { removeBook } from '../actions/index';
import PropTypes from 'prop-types'

function BooksList(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Title</td>
          <td>Category</td>
          <td>Remove Book</td>
        </tr>
      </thead>
      <tbody>
        {
          props.books.map((book, index) => {
            return (
              <Book key={index} index={index} book={book} onClick={props.removeBook} />
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
};


const mapDispatchToProps = dispatch => {
  return {
    removeBook: (bookIndex) => dispatch(removeBook(bookIndex))
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      removeBook: PropTypes.func.isRequired
    }).isRequired
  ).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
