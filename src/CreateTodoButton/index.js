import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };
    
    return (
        <button 
            className='btnAdd'
            onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };