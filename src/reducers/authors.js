export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_AUTHOR':
      return [...state, action.author]
    default:
      return state;
  }
}
