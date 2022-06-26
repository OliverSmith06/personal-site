import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";


const classes = {
    circle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: "#b3e3ff",
        position: "absolute",
        marginLeft: '250px',
        outline: '5px solid #404040',
      },
    rightCircle: {
        marginLeft: '550px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: "#b18be8",
        position: "absolute",
        outline: '5px solid #404040',
      },
    leftCircle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: "#4ed1a1",
        position: "absolute",
        outline: '5px solid #404040',
      },
    line: {
        width: '10px',
        height: '50px',
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        marginLeft: '270px',
    },
    leftLine: {
        width: '10px',
        height: '50px',
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        marginLeft: "20px",
    },
    rightLine: {
        width: '10px',
        height: '50px',
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        marginLeft: '570px', 
    }
};

function Circle(props) {

    var chosen = classes.circle;
    if (props.side == 'left'){
        chosen = classes.leftCircle;
    } else if (props.side == 'right'){
        chosen = classes.rightCircle;
    }

    var chosenLine = classes.line;
    if (props.side == 'left'){
        chosenLine = classes.leftLine;
    } else if (props.side == 'right'){
        chosenLine = classes.rightLine;
    }


    if(props.notCircle === "true"){
        return(
            <div style={chosenLine} />
        );
    } else{
        return (
            <div style={chosen} />
        );
    }
    
}

export default Circle;
