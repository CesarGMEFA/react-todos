import react from "react";
import './TodoList.css'

function TodoList(props){
    return(
        <section className="section">
            <ul className="section_ul">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};