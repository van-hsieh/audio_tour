// store/audioReducer.js
const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
};

function audioReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ITEMS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_ITEMS_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_ITEMS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "SET_SELECTED_ITEM":
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
}

export default audioReducer;
