(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUsefulContents = getUsefulContents;
function getJSON(url, callback) {
	"use strict";
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		callback(this.responseText);
	};
	xhr.open("GET", url, true);
	xhr.send();
}

function getUsefulContents(url, callback) {
	getJSON(url, function (data) {
		return callback(JSON.parse(data));
	});
}

},{}],2:[function(require,module,exports){
"use strict";

var _ajaxJson = require("./ajaxJson");

var _namedExportsJs = require('./named-exports.js');

(0, _ajaxJson.getUsefulContents)("./package.json", function (data) {
	alert("Yes, I am");
	console.log(JSON.stringify(data));
});

console.log((0, _namedExportsJs.cube)(3));
console.log(_namedExportsJs.foo);

},{"./ajaxJson":1,"./named-exports.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cube = cube;

function cube(x) {
	"use strict";
	return x * x * x;
}

var foo = Math.PI + Math.SQRT2;
exports.foo = foo;

},{}]},{},[2]);
