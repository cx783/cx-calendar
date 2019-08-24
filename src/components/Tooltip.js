import React from 'react';
import ReactDOM from 'react-dom';
import usePortal from './../hooks/usePortal';
import Panel from './Panel';


const Tooltip = ({ children, parentEl }) => {
    const target = usePortal('tooltips');
    return ReactDOM.createPortal(<Panel parentEl={parentEl}>{children}</Panel>, target);
}

export default Tooltip;