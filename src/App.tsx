import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { Todo, AddTodo, DeleteTodo, EditTodo } from "./types";
import Header from "./Header";
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";
import { ToggleAddFormButton } from "./ToggleAddFormButton";
import { ToggleTooltipButton } from "./ToggleTooltipButton";
import { Col, Row } from "react-bootstrap";

const App: React.FC = () => {
  const [isModalVisable, setIsModalVisible] = useState(false);
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const [editData, setEditData] = useState({
    text: "",
    complete: false,
  })
  const [toggleTooltip, setToggleTooltip] = useState<boolean>(false);
  const [toggleEditOrAddForm, setToggleEditOrAddForm] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(wasModalvisible => !wasModalvisible);
  }


  //delete todo
  const deleteTodo: DeleteTodo = selectedTodo => {
    const updatedTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(updatedTodos);
  };

  //edit todo
  const editTodo: EditTodo = selectedTodo => {
    const updatedTodos = todos.map((todo) => todo.id === selectedTodo.id ?
      {
        ...todo,
        text: selectedTodo.text,
        complete: selectedTodo.complete,
      } :
      todo
    );
    setTodos(updatedTodos);
  };

  //add todo
  const addTodo: AddTodo = newTodo => {
    newTodo &&
      setTodos([{ id: newTodo.id, text: newTodo.text, complete: newTodo.complete }, ...todos]);
  };

  return (
    <React.Fragment>
      <div className="App" >
        <Header />
        <Row>
          <div className="content-container">
            <Col xs={12} sm={10} md={8} lg={6}>
              <div className="header-list">
                <BaseModalWrapper
                  editData={editData}
                  editTodo={editTodo}
                  addTodo={addTodo}
                  isModalVisible={isModalVisable}
                  onBackdropClick={toggleModal}
                  setToggleEditOrAddForm={setToggleEditOrAddForm}
                  toggleEditOrAddForm={toggleEditOrAddForm}
                />
                <TodoList todos={todos}
                  setTodos={setTodos}
                  deleteTodo={deleteTodo}
                  setEditData={setEditData}
                  editTodo={editTodo}
                  toggleModal={toggleModal}
                  setToggleEditOrAddForm={setToggleEditOrAddForm}
                  toggleTooltip={toggleTooltip}
                ></TodoList>
              </div>
            </Col>
          </div>
          <div className="menu-container">
            <Col className="menu-col" xs={12} sm={10} md={8} lg={7}>
              <ToggleTooltipButton toggleTooltip={toggleTooltip} setToggleTooltip={setToggleTooltip} />
              <ToggleAddFormButton toggleModal={toggleModal} setToggleEditOrAddForm={setToggleEditOrAddForm} />
            </Col>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default App;
