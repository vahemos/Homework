"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
exports.PI = void 0;

function pow(base, exponent) {
  return Math.pow(base, exponent);
}

;

function hypotenuse(adjacent, opposite) {
  return adjacent * adjacent + opposite * opposite;
}

;

function circleArea(radius) {
  return Math.PI * (radius * radius);
}

;
const PI = Math.PI;
exports.PI = PI;