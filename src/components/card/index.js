import {useDrag} from "react-dnd";
import React from "react";


const Card = ({type, text}) => {
    const [{opacity}, dragRef] = useDrag({
        item: {type: type, text},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });
    return (
        <div className="card" ref={dragRef} style={{opacity}}>
            {text}
        </div>
    )
}

export default Card