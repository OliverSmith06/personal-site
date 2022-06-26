import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { SM } from './SM';
import React, { useState } from 'react';
import BranchRight from './components/branch-right';
import MergeRight from './components/merge-right';
import Circle from './components/circle';
import CircleContainer from './components/circle-container';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import {
  NaturalCurve,
  BasisCurve
} from "react-svg-curve";



const classes = {
  app: {
    textAlign:'center',
    backgroundColor: SM.colors.primary,
  },
  nav: {
    backgroundColor: SM.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: SM.fontSize.M,
    color: SM.colors.secondary,
    spacing: SM.spacing.S,
  },
  navLink: {
    padding: `${SM.spacing.XS} ${SM.spacing.S}`
  },
  appLink: {
    color: '#61dafb',
  },
  line: {
    width: '10px',
    height: '40vh',
    backgroundColor: SM.colors.tertiary,
  },
  circle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: SM.colors.tertiary,
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  curveStraightToRight: {
    width: '200px',
    marginTop: '-110px',
    marginLeft: '200px',
    height: '200px',
    border: `solid 5px #000`,
    borderColor: `transparent transparent transparent ${SM.colors.tertiary}`,
    borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
    transform: 'rotate(-45deg)'
  },
  toRightLine: {
    position: 'absolute',
    width: '0.7%',
    height: '80vh',
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

function App() {

  function navEnter(e) {
    e.target.style.filter = 'brightness(75%)';
    e.target.style.cursor = 'pointer';
  }

  function navLeave(e) {
    e.target.style.filter = 'brightness(100%)';
  }

  return (
    <div style={classes.app}>
      
      <header style={classes.nav}>
        <div onMouseLeave={navLeave} onMouseEnter={navEnter} style={classes.navLink}>Home</div>
        <div onMouseLeave={navLeave} onMouseEnter={navEnter} style={classes.navLink}>About</div>
        <div onMouseLeave={navLeave} onMouseEnter={navEnter} style={classes.navLink}>Contact</div>
        <div onMouseLeave={navLeave} onMouseEnter={navEnter} style={classes.navLink}>Resume</div>
      </header>
      <div style = {classes.timeline}>
        <div style={classes.line} />
        <CircleContainer>
          <Circle side="center" notCircle="false" />
        </CircleContainer>
        <BranchRight />
        <CircleContainer>
          <Circle side="right" notCircle="false" />
          <Circle side="center" notCircle="true" />
          {/* <Circle side="left" notCircle="false" />  */}
        </CircleContainer>
        <CircleContainer>
          <Circle side="right" notCircle="true" />
          <Circle side="center" notCircle="true" />
        </CircleContainer>
        <CircleContainer>
          <Circle side="right" notCircle="false" />
          <Circle side="center" notCircle="true" />
        </CircleContainer>
        <CircleContainer>
          <Circle side="right" notCircle="true" />
          <Circle side="center" notCircle="false" />
        </CircleContainer>
        <CircleContainer>
          <Circle side="right" notCircle="false" />
          <Circle side="center" notCircle="true" />
        </CircleContainer>
        

        <MergeRight />
        <CircleContainer>
          <Circle side="center" notCircle="false" />
        </CircleContainer>
        <div style={classes.line} />
        {/* <div style={classes.circle} /> */}
      </div>
      {/* <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), MoveOut(0, -200))}>
            <div style={classes.firstLine}></div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Sticky())}>
            <div style={classes.firstLine}></div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div style={classes.firstLine}></div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div style={classes.line}></div>
          </Animator>
        </ScrollPage>
      </ScrollContainer> */}
    </div>
  );
}

export default App;
