import React, { useState, ChangeEvent, FormEvent } from "react";
import './AddTodoForm.css';
import { AddTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
  onBackdropClick: () => void;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo, onBackdropClick }) => {
  const [newTodo, setNewTodo] = useState({
    id: "",
    text: "",
    complete: false,
  });
  const [formError, setFormError] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prevState) => {
      return ({
        ...prevState,
        text: e.target.value
      });
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "false") {
      return setNewTodo((prevState) => ({
        ...prevState,
        complete: false
      })
      );
    }
    else {
      return setNewTodo((prevState) => ({
        ...prevState,
        complete: true
      })
      );
    };
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    const newTodoObj = {
      id: uniqid,
      text: newTodo.text,
      complete: newTodo.complete
    }
    if (newTodo.text.length >= 3) {
      addTodo(newTodoObj);
      onBackdropClick()
      setNewTodo({
        id: "",
        text: "",
        complete: false,
      });
    } else {
      setDisplayError(true);
      setFormError("Please include 3 or more characters");
    }

  };

  return (
    <div className="add-todo-form-container">
      <form className="add-todo-form">
        <h3><span style={{ color: "#982CF6", textDecoration: "underline #982CF6" }}>Create</span> a new Todo</h3>
        <div className="input-label-grp">
          <label className="input-label" htmlFor="title" id="title">Title</label>
          <input
            required
            name="title"
            className="text-input"
            type="text"
            placeholder="Finish math homework"
            minLength={3}
            maxLength={50}
            value={newTodo.text} onChange={handleTextChange}
          />
          {displayError ? <span style={{ color: "red", fontSize: "20px" }}>{formError}</span> : ""}
        </div>
        <div className="input-label-grp">
          <label className="input-label" htmlFor="status">Status</label>
          <select name="status" className="select-input" onChange={handleSelectChange}>
            <option className="option" value="" disabled>Status</option>
            <option className="option" value="false">
              Not Completed
            </option>
            <option className="option" value="true">
              Completed
            </option>
          </select>
        </div>
        <div className="btn-grp">
          <button type="submit" className="add-new-todo-btn"
            onClick={handleSubmit}>
            Add new Todo
          </button>
        </div>
      </form>
    </div>
  );
};
