import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? '#50f504' : '#2b8502'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }