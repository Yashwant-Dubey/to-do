import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { Button,Form,Container,Row,Col,Table } from 'react-bootstrap';

const ToDo = () => {
  const [inputData, setinputData] = useState("");
  const [item, setItemList] = useState([]);

  const inputItem = (e) => {
    setinputData(e.target.value);
  };

  const addItem = () => {
    if(inputData)
    {
      setItemList((prevItem) => {
        return [...prevItem, inputData];
      });
      setinputData("");
    }else{
      alert('Please enter a value.')
    }
    
  };

  const deleteItem = (id) => {
    setItemList((prevItem) => {
      return prevItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>      
      <Container>
        <Row>
          <Col>
            <div>
              <Form>
                <Form.Group controlId="addTodo">
                  <Form.Label>Add Todo</Form.Label>
                  <Form.Control type="text" placeholder="Add a todo" value={inputData} onChange={inputItem} maxLength={20}/>                  
                </Form.Group>
                <Button variant="success" type="button" onClick={addItem}>
                  Add
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div>
              <h6> To-Do List</h6>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ToDo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(item.length) ? (item.map((itemval, index) => {
                    return (
                      <ToDoList
                        itemval={itemval}
                        key={index}
                        id={index}
                        onSelect={deleteItem}
                      />
                    );
                  })) : (<tr><td colSpan="2">No data found.</td></tr>)}                  
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;
