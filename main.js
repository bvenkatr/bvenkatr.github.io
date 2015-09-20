import { getUsefulContents } from "./ajaxJson";
getUsefulContents("http://www.google.com", data => {
	alert("Yes, I am");
	console.log(JSON.stringify(data));
});

import {cube, foo} from './named-exports.js';
console.log(cube(3));
console.log(foo);