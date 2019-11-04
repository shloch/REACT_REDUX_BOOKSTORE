import React from 'react'

function CategoryFilter(props) {
  const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

  return (
    <select name="category" onChange={(e) => props.handleChange(e)}>
    <option value=''>ALL</option>
    {
      CATEGORIES.map((category, index) => {
        return (
          <option key={index} value={category}>{category}</option>
        )
      })
    }
  </select>  )
}

export default CategoryFilter
