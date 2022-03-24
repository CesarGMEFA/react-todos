import React from "react";
import { TodoIcon } from './'

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type="delete"
            color=" #d30606"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon }