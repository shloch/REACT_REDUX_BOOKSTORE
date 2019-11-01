import React, { Component } from 'react'

class Booksform extends Component {  
  render() {
    const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    return (
      <form>
        <input type="text" value={""} name="title"/>
        <select value={''} name="category">
          {
            CATEGORIES.map((category, index) => {
              return (
                <option key={index} value={category}>{category}</option>
                )
            })
          }          
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Booksform
