export const initialState = {
  term: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};
