import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";


const classes = {
  line: {
    marginLeft: '-5px',
    width: '10px',
    position: 'absolute',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  },
  toRightCurve: {
    position: 'absolute',
  },
  toRight: {
    height: '500px'
  },
  leftLine: {
    marginLeft: '-305px',
    width: '10px',
    position: 'absolute',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  },
};

const data = [
  [0,0],
  [0,200],
  [200,250],
  [300,350],
  [300, 500],
];

function BranchRight(props) {

  return (
        <div style={classes.toRight}>
          <svg style={classes.toRightCurve} width="550" height="500" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} showPoints={false} strokeWidth={10} stroke={SM.colors.tertiary} />
          </svg>
          <div style={classes.line} />
          {props.hasLeft &&
            <div style={classes.leftLine} />
          }
        </div>
  );
}

export default BranchRight;
