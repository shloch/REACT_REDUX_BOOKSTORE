let bookCount = 100;


export const createBook = book => {
  return {
    type: 'CREATE_BOOK',
    id: ++bookCount,
    book

  }
}

export const removeBook = (bookIndex) => {
  return {
    type: 'REMOVE_BOOK',
    bookIndex
  }
}

export const changeFilter = category => {
  return {
    type: `CHANGE_FILTER`,
    category
  }
}