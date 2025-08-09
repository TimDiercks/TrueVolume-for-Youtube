const indexOfScaleTranformation = 1;

const smallRippleCutoff = 20;
const bigRippleCutoff = 80;

const setSpeakerRipples = (volume) => {
  const smallRipple = document.querySelector(
    "path.ytp-svg-volume-animation-small-ripple"
  );
  const bigRipple = document.querySelector(
    "path.ytp-svg-volume-animation-big-ripple"
  );
  
  if (!smallRipple || !bigRipple) {
    return
  }

  if (volume > bigRippleCutoff) {
    smallRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 1;
    bigRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 1;
    bigRipple.transform.baseVal[indexOfScaleTranformation].matrix.d = 1;
  } else if (volume > smallRippleCutoff) {
    smallRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 1;
    bigRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 0;
  } else {
    smallRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 0;
    bigRipple.transform.baseVal[indexOfScaleTranformation].matrix.a = 0;
  }
};
