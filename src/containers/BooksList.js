import React from 'react'
import { connect } from "react-redux";
import Book from "../components/Book";
import CategoryFilter from "../components/CategoryFilter";
import { removeBook, changeFilter } from '../actions/index';
import PropTypes from 'prop-types'
import '../BooksList.css'

function BooksList(props) {

  const handleFilterChange = (e) => {
    let filter = e.target.value;
    props.changeFilter(filter)
  }

  let filteredBooks = props.books.filter((book) => book.category === props.filter || props.filter === '')

  return (
    <>
    <div className="header">
      <div className="header-title">BookStore CMS</div>
      <div>
        <CategoryFilter onChange={handleFilterChange} />
      </div>      
    </div>    
      <div>
        {
          filteredBooks.map((book, index) => {
            return (
              <Book key={index} index={index} book={book} onClick={props.removeBook} />
            )
          })
        }
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
    filter: state.filter
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
