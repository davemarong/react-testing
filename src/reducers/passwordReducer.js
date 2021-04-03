export const password_info = (state = "", action) => {
  if (action.type === "GET_PASSWORD") {
    return "Password info is uuu : " + action.payload;
  } else {
    return state;
  }
};
