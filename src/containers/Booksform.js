import React, { Component } from 'react';
import { createBook } from '../actions/index';
import { connect } from "react-redux";

class BooksForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      category: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    let { title, category } = this.state;
    if (title.length !== 0 && category.length !== 0) {
      this.props.saveBook(this.state);
    } else {
      alert('YOU MUST SUBMIT "TITLE" + "CATEGORY" TO SAVE');
    }

    this.setState({
      title: '',
      category: ''
    });
    e.preventDefault();
  };

  render() {
    const { title, category } = this.state;
    const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    return (
      <form>
        <input type="text" value={title} name="title" onChange={this.handleChange.bind(this)} />
        <select value={(category) ? 'Action' : category} name="category" onChange={this.handleChange.bind(this)}>
          <option value='default'>.... </option>
          {
            CATEGORIES.map((category, index) => {
              return (
                <option key={index} value={category}>{category}</option>
              )
            })
          }
        </select>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBook: (book) => dispatch(createBook(book))
  };
};

export default connect(null, mapDispatchToProps)(BooksForm)
