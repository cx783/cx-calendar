import React from 'react';

function getStyle(top, left, leftCriteriaWidth) {

    return {
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        padding: `1rem`,
        backgroundColor: '#FFF',
        border: `1px solid #DDD`,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
        width: `${leftCriteriaWidth}px`,
        boxSizing: 'border-box',
        display: 'flex'
    };
}

export default (props) => {
    const clientRect = props.parentEl.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const leftCriteriaWidth = 400;

    let top = clientRect.top;
    let left = clientRect.left + clientRect.width;
    let classPosition = 'arrow-left';

    if (windowWidth - left < leftCriteriaWidth) {
        left = clientRect.left - leftCriteriaWidth;
        classPosition = 'arrow-right';
    }

    return <div style={getStyle(top, left, leftCriteriaWidth)} className={classPosition}>
        {props.children}
    </div>;
} 
