import React from "react";
import { Button } from 'react-bootstrap';


function ToDoList(props) {
  return (
    <>
      <tr>
        <td>{props.itemval}</td>
        <td>          
          <Button variant="danger" type="button" onClick={() => { props.onSelect(props.id) }}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default ToDoList;
