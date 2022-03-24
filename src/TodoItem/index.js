import react from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './TodoItem.css'

// const logo = './icons/check-circle-regular.svg'
function TodoItem(props){
    return(
        <li className="li">
            {/* <i 
                className={`fa-regular fa-circle-check icon_check icon ${props.completed && 'icon_check--completed'}`}
                onClick={props.onComplete}
            ></i> */}
            <CompleteIcon 
              completed={props.completed}
              onComplete={props.onComplete}
            />
            <p className={`item_text ${props.completed && 'item_text--completed'}`}>
                {props.text}
            </p>
            <DeleteIcon 
              onDelete={props.onDelete}
            />
            {/* <i 
                className="fa-regular fa-circle-xmark icon_close icon"
                onClick={props.onDelete}
            ></i> */}
        </li>
    )
}

export { TodoItem };