export const user_info = (state = "", action) => {
  if (action.type === "GET_USERNAME") {
    return action.payload;
  } else {
    return state;
  }
};
