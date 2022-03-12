import React,{useState,useEffect}  from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Context from './Context.jsx'
import {useContext} from "react";

 


export default function CheckboxList(props) {
  console.log(props);
  let {remove,check} = useContext(Context);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        margin: "0 auto",
      }}
    >
      {props.todo.map((value) => {
        const labelId = `checkbox-list-label-${value.task}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => {
                  remove(value.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  checked={value.checked}
                  onChange={() => {
                    check(value.id);
                  }}
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.task}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
