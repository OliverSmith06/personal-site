import '../App.css';
import { SM } from '../SM';
import React from 'react';
import {
  BasisCurve
} from "react-svg-curve";
import { getThemeProps } from '@material-ui/styles';


const classes = {
  line: {
    marginLeft: '270px',
    width: '10px',
    height: '500px',
    position: 'absolute',
    backgroundColor: SM.colors.tertiary,
  },
  toLeftCurve: {
    marginLeft: '-30px',
    position: 'absolute',
  },
  leftMerge: {
    marginLeft: '-550px',
    height: '500px',
  },
  rightLine: {
    marginLeft: '570px',
    position: 'absolute',
    width: '10px',
    height: '500px',
    backgroundColor: SM.colors.tertiary,
  },
};

const data = [
  [305, 0],
  [305,150],
  [205,250],
  [5,300],
  [5, 500],
];

function BranchLeft(props) {

  return (
        <div style={classes.leftMerge}>
          <svg style={classes.toLeftCurve} width="400" height="500" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} showPoints={false} strokeWidth={10} stroke={SM.colors.tertiary} />
          </svg>
          <div style={classes.line} />
          {props.hasRight === "true" &&
                <div style={classes.rightLine}/>
            }
        </div>
  );
}

export default BranchLeft;
