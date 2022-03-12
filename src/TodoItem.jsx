import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Context from "./Context";

const TodoItem = ({ id, task, checked }) => {
  let { dispatch } = useContext(Context);

  return (
    <div id={id} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() =>
          dispatch({
            type: "check",
            payload: id,
          })
        }
      />
      <p>{task}</p>
      <DeleteIcon
        onClick={() =>
          dispatch({
            type: "remove",
            payload: id,
          })
        }
      />
    </div>
  );
};

export default TodoItem;
