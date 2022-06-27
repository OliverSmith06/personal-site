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
    lineBox: {
        width: '550px',
        height: '20vh',
    },
    line: {
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        height: 'inherit',
        marginLeft: '270px',
        width: '10px',
    },
    leftLine: {
        width: '10px',
        marginLeft: '-30px',
        height: 'inherit',
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        // marginLeft: "20px",
    },
    rightLine: {
        width: '10px',
        height: 'inherit',
        backgroundColor: SM.colors.tertiary,
        position: "absolute",
        marginLeft: '570px', 
    }
};

function LineContainer(props) {

    // isCenter="true"
    return (
        <div style={classes.lineBox} >
            {props.isCenter === "true" &&
                <div style={classes.line}/>
            }
            {props.isRight === "true" &&
                <div style={classes.rightLine}/>
            }
            {props.isLeft === "true" &&
                <div style={classes.leftLine}/>
            }
        </div>
    );
    
}

export default LineContainer;
