import {useDrop} from "react-dnd";
import React from "react";

const Spot = ({type, text, handleDrop, spot}) => {
    const [{canDrop, isOver}, dropRef] = useDrop({
        accept: type,
        drop: item => {
            handleDrop(spot, item)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })
    let backgroundColor = '#f2f2f2'
    if (canDrop) backgroundColor = '#096965'
    if (isOver) backgroundColor = '#4bdcd5'

    return (
        <div className="spot" ref={dropRef} style={{backgroundColor}}>
            {text}
        </div>
    )
}

export default Spot