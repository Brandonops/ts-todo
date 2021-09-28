import React from 'react';
import { AddTodoForm } from '../AddTodoForm';
import { AddTodo, EditTodo } from '../types';
import Modal from './Modal';
import './Modal.css';
import { VscClose } from "react-icons/vsc";
import { EditTodoForm } from '../EditTodoForm';


interface BaseModalWrappperProps {
    isModalVisible: boolean;
    onBackdropClick: () => void;
    addTodo: AddTodo;
    editTodo: EditTodo;
    editData: object;
    setToggleEditOrAddForm: any;
    toggleEditOrAddForm: boolean;
}

const BaseModalWrapper: React.FC<BaseModalWrappperProps> = ({
     onBackdropClick, 
     isModalVisible, 
     addTodo,
     editTodo, 
     editData,
     toggleEditOrAddForm
    }) => {
    if (!isModalVisible) {
        return null
    }
    return (
        <div>
            <Modal>
                <div className="modal-container">
                    <VscClose className="close-button" onClick={onBackdropClick}></VscClose>
                    {toggleEditOrAddForm ? 
                    <EditTodoForm editTodo={editTodo} editData={editData} onBackdropClick={onBackdropClick} /> :
                     <AddTodoForm addTodo={addTodo} onBackdropClick={onBackdropClick} />
                    }
                </div>
            </Modal>
        </div>
    )
}

export default BaseModalWrapper
