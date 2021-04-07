"use strict";

var _math = require("./math.js");

var _format = _interopRequireDefault(require("./format.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _format.default)("circleArea", (0, _math.circleArea)(8));
(0, _format.default)("triangle hypotenuse", (0, _math.hypotenuse)(8, 11));
(0, _format.default)("power", (0, _math.pow)(5, 9));
(0, _format.default)("PI", _math.PI);