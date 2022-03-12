import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import List from './List.jsx'
import Context from "./Context.jsx";

export default function Inp() {
let [todo, setTodo] = useState([]);
let [inpval, setInpval] = useState('');

function add(e){
      setTodo([...todo,
      {id:Date.now(),
       task:inpval,
       checked:false,
  }])
 setInpval("")
}
useEffect(()=>{
 
  if(!localStorage.hasOwnProperty('todo')){
localStorage.setItem('todo',JSON.stringify([]))
  }
  else{
    let valt = JSON.parse(localStorage.getItem('todo'))
    setTodo(valt);
  }
},[])

useEffect(()=>{

  localStorage.setItem('todo',JSON.stringify(todo))

},[todo])
function remove(id) {
  setTodo(todo.filter(i=>{
    return i.id!==id
  }))
  
}
function check(id) {
  setTodo(todo.map(i=>{
    if(i.id===id){
    i.checked = !i.checked
  
  }
  return i
  }))
}
    return (
      <Context.Provider value={{remove,check}} style={{ margin: "10px 0px" }}>
        <input
          style={{ margin: "0px 10px", height: "20px", width: "16%" }}
          type="text"
          value={inpval}
          onChange={(e) => {
            return setInpval(e.target.value);
          }}
        />

        <Button
          style={{ width: "10%", backgroundColor: "red" }}
          variant="contained"
          value="ADD"
          onClick={add}
        >
          ADD
        </Button>

        <List todo={todo} />
      </Context.Provider>
    );}