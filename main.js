import { getUsefulContents } from "./ajaxJson";
getUsefulContents("http://www.google.com", data => {
	alert("Yes, I am");
	console.log(JSON.stringify(data));
});