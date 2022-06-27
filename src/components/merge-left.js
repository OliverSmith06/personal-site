import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";


const classes = {
  line: {
    marginLeft: '270px',
    width: '10px',
    position: 'absolute',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  },
  toLeftCurve: {
    position: 'absolute',
    marginLeft: '-30px',
  },
  leftMerge: {
    height: '500px',
    marginLeft: '-550px',
  },
  rightLine: {
    marginLeft: '570px',
    width: '10px',
    position: 'absolute',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  }
};

const data = [
  [5, 0],
  [5, 200],
  [205, 250],
  [305, 350],
  [305, 500]
];

function MergeLeft(props) {

  return (
        <div style={classes.leftMerge}>
          <svg style={classes.toLeftCurve} width="560" height="500" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} showPoints={false} strokeWidth={10} stroke={SM.colors.tertiary} />
          </svg>
          <div style={classes.line} />
          {props.hasRight &&
            <div style={classes.rightLine} />
          }
        </div>
  );
}

export default MergeLeft;
