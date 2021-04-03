import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_username } from "./actions/usernameAction";
import { get_password } from "./actions/passwordAction";

export default function Home() {
  const dispatch = useDispatch();
  const redux_username = useSelector((state) => state.user);
  const redux_password = useSelector((state) => state.password);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = () => {
    console.log("fetch stuff bro");
    console.log(username, password);
  };
  return (
    <div>
      username
      <input onChange={handleUsername} type="text" />
      <div></div>
      password
      <input onChange={handlePassword} type="text" />
      <div></div>
      <button onClick={handleSubmit}>Submit</button>
      <div>" " </div>
      <div>{redux_username}</div>
      <div>{redux_password}</div>
      <button
        onClick={() => {
          dispatch(get_username(username));
          dispatch(get_password(password));
        }}
      >
        Dispatch action
      </button>
    </div>
  );
}
