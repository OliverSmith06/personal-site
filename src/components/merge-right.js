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
  leftLine: {
    marginLeft: '-305px',
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
  }
};

const data = [
    [300, 0],
    [300,150],
    [200,250],
    [0,300],
    [0, 500],
];

function MergeRight(props) {

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

export default MergeRight;
