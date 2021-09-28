import React, { useEffect, useState } from "react";
import { Todo } from "./types";
import { IoIosCheckmark } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

import "./TodoListItem.css";
import ReactTooltip from "react-tooltip";


interface TodoListItemProps {
  todo: Todo;
  deleteTodo: any;
  editTodo: any;
  reft: any;
  draggable: any;
  dragHandle: any;
  style: any;
  setEditData: any
  toggleModal: () => void;
  setToggleEditOrAddForm: any;
  toggleTooltip: boolean;
}


export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  deleteTodo,
  reft,
  draggable,
  dragHandle,
  style,
  editTodo,
  setEditData,
  toggleModal,
  setToggleEditOrAddForm,
  toggleTooltip,

}) => {
  const [todoComplete, setTodoComplete] = useState(todo);
  useEffect(() => {
    setTodoComplete(todo)
  }, [todo])
  const handleClick = () => {
    if (todoComplete.complete === true) {
      return editTodo(
        {
          id: todoComplete.id,
          text: todoComplete.text,
          complete: false
        }
      )
    } else {
      return editTodo(
        {
          id: todoComplete.id,
          text: todoComplete.text,
          complete: true
        }
      )
    }
  };

  return (
    <li ref={reft} {...draggable} {...dragHandle} style={style} className="item">
      <div className="text-complete-grp">
        {
          todoComplete.complete === true ?
            <div>
              <IoIosCheckmark
                onClick={() => handleClick()}
                className="checked-symbol-complete">
              </IoIosCheckmark>
            </div>

            :
            <div>
              {
                !toggleTooltip ? <ReactTooltip id="t" place="bottom" type="success" effect="solid" /> : ""
              }
              <div
                data-tip="Mark as Complete"
                data-for="t"
                onClick={() => handleClick()}
                className="complete-btn checked-symbol">
              </div>
            </div>
        }
        <p className="todo-item-text">{todo.text}</p>
      </div>
      {
        <div className="grouped-options">
          <div>
            {
              !toggleTooltip ? <ReactTooltip id="edit" place="bottom" type="info" effect="solid" /> : ""
            }
            <AiFillEdit data-tip="Edit Todo" data-for="edit" className="edit-btn" onClick={() => {
              setToggleEditOrAddForm(true);
              setEditData(todo)
              toggleModal();
            }}></AiFillEdit>
          </div>
          {
            !toggleTooltip ? <ReactTooltip id="delete" place="bottom" type="error" effect="solid" /> : ""
          }
          <AiFillDelete data-tip="Remove Todo" data-for="delete" className="delete-btn" onClick={() => deleteTodo(todo)}></AiFillDelete>
        </div>
      }
    </li>
  );
};
