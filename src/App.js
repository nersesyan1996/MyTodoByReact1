import "./App.css";
import { useState, useEffect } from "react";
import Context from "./Context";
import Todo from "./Todo";
import React, { useReducer } from "react";
import reducer from "./reducer";
function App() {
  let [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todo"))
  );
  let [inputVal, setInputVal] = useState("");
  useEffect(() => {
    if (!localStorage.hasOwnProperty("todo")) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  function addTodo(e) {
    if (e.key === "Enter") {
      dispatch({
        type: "add",
        payload: inputVal,
      });
      setInputVal("");
    }
  }

  return (
    <Context.Provider value={{ dispatch }}>
      <input
        type="text"
        placeholder="type your task"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={addTodo}
      />
      <Todo todo={state} />
    </Context.Provider>
  );
}

export default App;
