import React from 'react'

function CategoryFilter(props) {
  const CATEGORIES = ["ALL", "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

  return (
    <select name="category" onChange={(e) => props.onChange(e)}>
    <option value='default'>Filter Books</option>
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
