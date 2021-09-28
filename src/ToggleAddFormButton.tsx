import React from "react";
import { MdAdd } from 'react-icons/md'

interface ToggleAddFormButtonProps {
  toggleModal: () => void,
  setToggleEditOrAddForm: any;

}

export const ToggleAddFormButton: React.FC<ToggleAddFormButtonProps> = ({ toggleModal, setToggleEditOrAddForm }) => {


  return (
    <div className="toggle-add-form-btn show-add-todo-modal"
      onClick={() => {
        setToggleEditOrAddForm(false)
        toggleModal()
      }
      }>
      <MdAdd className="toggle-add-form-icon"></MdAdd>
      <div className="btn-text">Create a new Todo</div>
    </div>
  );
};
