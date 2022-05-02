const CHECK_STATUS = 'bookstore-app/CATEGORIES/CHECK_STATUS';

const initialState = {
  categories: []
}

const categoriesReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHECK_STATUS: 
     return 'Under construction'
    default: return state;
  }
}

export const checkStatus = () => {
  return {
    type: CHECK_STATUS
  }
}

export default categoriesReducer;