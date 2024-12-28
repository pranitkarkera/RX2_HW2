const initialState = {
    books: []
}

const libraryReducer = (state=initialState, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return {
          ...state,
          books: [
            ...state.books,
            {
              title: action.payload.title,
              author: action.payload.author,
              isbn: action.payload.isbn,
            },
          ],
        };
      case "REMOVE_BOOK":
        return {
          ...state,
          books: state.books.filter((book) => book.isbn !== action.payload),
        };
      default:
        return state;
    }
}
export default libraryReducer