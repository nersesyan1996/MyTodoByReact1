import './App.css';
import Todoinp from "./TodoInp.jsx";
import reducer,{init} from "./reduce.jsx";
import { useReducer } from 'react';

function App() {
  // stat@ mer initna kam count@ @st sraya ashxatum
  const [count,dispatch] = useReducer(reducer,init.count)
  return (
    <div className="App">
      <Todoinp />
     {count%2===0 ? <p>{count}</p>:<p></p>}
      <button onClick={() => dispatch({type:"increment",payload:10,five:5})}>increment</button>
      <button onClick={() => dispatch({type:"decrement"})}>decrement</button>
    </div>
  );
}

export default App;
