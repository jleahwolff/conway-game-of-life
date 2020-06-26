import React from "react";

const randomize = Math.random();
function random(num) {
  if (num >= 0.8) {
    return '#246770';
  } else if (num >= 0.6) {
    return '#000000';
  } else if (num >= 0.4) {
    return '#155753';
  } else if (num >= 0.2) {
    return '#5fcfc7';
  } else {
    return '#435c5a';
  }
}

export default random;