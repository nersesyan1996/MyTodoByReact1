const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload,
          checked: false,
        },
      ];
    case "remove":
      return state.filter((i) => {
        return i.id !== action.payload;
      });
    case "check":
      return state.map((i) =>
        i.id === action.payload ? { ...i, checked: !i.checked } : i
      );
    default:
      return state;
  }
};
export default reducer;
