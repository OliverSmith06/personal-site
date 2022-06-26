import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";


const classes = {
  line: {
    width: '10px',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  },
  toRightCurve: {
    position: 'absolute',
  },
};

const data = [
  [0,0],
  [0,200],
  [200,250],
  [300,350],
  [300, 500],
];

function BranchRight() {

  return (
        <div>
          <svg style={classes.toRightCurve} width="550" height="500" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} showPoints={false} strokeWidth={10} stroke={SM.colors.tertiary} />
          </svg>
          <div style={classes.line} />
        </div>
  );
}

export default BranchRight;
