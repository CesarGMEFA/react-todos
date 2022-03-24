import React from "react";
import { ReactComponent as CheckSVG } from './check-circle-regular.svg';
import { ReactComponent as DeleteSVG } from './times-circle-regular.svg';
import './TodoIcon.css';

const iconTypes = {
    'check': color => (
        <CheckSVG className="icon-svg icon_svg--check" fill={color}/>
    ),
    'delete': color => (
        <DeleteSVG className="icon-svg icon_svg--delete" fill={color}/>
    ),
}
function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span
          className={`icon  icon_${type}`}
          onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }