import React, { useState, ChangeEvent, FormEvent } from "react";
import './AddTodoForm.css';

interface EditTodoFormProps {
  editData: any;
  editTodo: any;
  onBackdropClick: () => void;
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ onBackdropClick, editTodo, editData }) => {
  const [updatedTodo, setUpdatedTodo] = useState({
    text: editData.text,
    complete: editData.complete,
  });
  const [formError, setFormError] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodo((prevState) => {
      return ({
        ...prevState,
        text: e.target.value
      })
    })
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "false") {
      return setUpdatedTodo((prevState) => ({
        ...prevState,
        complete: false
      })
      );
    }
    else {
      return setUpdatedTodo((prevState) => ({
        ...prevState,
        complete: true
      })
      );
    };
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updTodoObj = {
      id: editData.id,
      text: updatedTodo.text,
      complete: updatedTodo.complete
    }
    if (updTodoObj.text.length >= 3 ) {
      editTodo(updTodoObj);
      onBackdropClick()
      setUpdatedTodo({
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
        <h3><span style={{color: "#982CF6", textDecoration: "underline #982CF6"}}>Edit</span> Todo</h3>
        <div className="input-label-grp">
          <label className="input-label" htmlFor="title" id="title">Title</label>
          <input
            value={updatedTodo.text}
            name="title"
            className="text-input"
            type="text"
            placeholder="Finish math homework"
            onChange={handleTextChange} />
            {displayError ? <span style={{color: "red", fontSize: "20px"}}>{formError}</span> : ""}
        </div>
        <div className="input-label-grp">
          <label className="input-label" htmlFor="status">Status</label>
          <select name="status" value={updatedTodo.complete} className="select-input" onChange={handleSelectChange}>
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
          <button type="submit" className="edit-todo-form-btn" onClick={handleSubmit}>
            Update this Todo
          </button>
        </div>
      </form>
    </div>
  );
};
