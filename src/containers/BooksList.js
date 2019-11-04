import React from 'react'
import { connect } from "react-redux";
import Book from "../components/Book";
import CategoryFilter from "../components/CategoryFilter";
import { removeBook, changeFilter } from '../actions/index';
import PropTypes from 'prop-types'

function BooksList(props) {

  const handleFilterChange = (e) => {
    let filter = e.target.value;
    props.changeFilter(filter)
  }

  return (
    <>
    <CategoryFilter handleChange={handleFilterChange} />
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
          props.filteredBooks.map((book, index) => {
            return (
              <Book key={index} index={index} book={book} onClick={props.removeBook} />
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

const mapStateToProps = state => {
  return {
    filteredBooks: state.books.filter((book) => book.category === state.filter || state.filter === '')
  }
};


const mapDispatchToProps = dispatch => {
  return {
    removeBook: (bookIndex) => dispatch(removeBook(bookIndex)),
    changeFilter: (category) => dispatch(changeFilter(category))
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
