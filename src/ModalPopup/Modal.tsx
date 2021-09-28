import React from 'react';
import { Slide } from 'react-awesome-reveal';
import ReactDOM from 'react-dom';
import './Modal.css'

interface ModalProps {

}

const Modal: React.FC<ModalProps> = ({
    children,
}) => {
    return ReactDOM.createPortal(
        <div className="overlay" >
            <Slide direction="up" >
                <div className="modal-pop">
                    {children}
                </div>
            </Slide>
        </div>, document.getElementById('modal-root')!
    );
}

export default Modal
