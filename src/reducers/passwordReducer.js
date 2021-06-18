export const password_info = (state = "", action) => {
  if (action.type === "GET_PASSWORD") {
    return action.payload;
  } else {
    return state;
  }
};
