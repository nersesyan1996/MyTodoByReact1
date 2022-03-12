export let init = {count:0}

const reducer = (state, action) => {
  switch (action) {
    case "change":
      return state === 60 ? (state = 0) : (state = 60);
    case "increment":
      return state - 2;
    case "decrement":
      return state + 2;
    default:
      return state;
  }
};
export default reducer;
