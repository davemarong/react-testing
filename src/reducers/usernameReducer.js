export const user_info = (state = "", action) => {
  if (action.type === "GET_USERNAME") {
    return "User info is uuu : " + action.payload;
  } else {
    return state;
  }
};
