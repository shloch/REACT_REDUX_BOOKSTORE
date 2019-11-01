
const filter = (state = 'ALL', action) => {
  switch(action.type){
    case 'ALL':
      return ''
    
    case 'Action':
      return 'Action'

    case 'Biography':
      return 'Biography'

    case 'History':
      return 'History'

    case 'Horror':
      return 'Horror'

    case 'Kids':
      return 'Kids'

    case 'Learning':
      return 'Learning'

    case 'Sci-Fi':
      return 'Sci-Fi'

    default:
      return state
  }
}

export default filter;