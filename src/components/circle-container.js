import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";


const classes = {

};

function CircleContainer(props) {

    var chosen = classes.circle;
    if (props.side == 'left'){
        chosen = classes.leftCircle;
    } else if (props.side == 'right'){
        chosen = classes.rightCircle;
    }
    
    return (
        <div style={{width:"550px", paddingBottom: "50px"}}>
            {props.children}
        </div>
    );
}

export default CircleContainer;
