//Censor Words from Array
//censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"
function censorString(str, arr, char) {
	let re = new RegExp(arr.join('|'), 'gi');// /Today|a/gi
	return str.replace(re, v => char.repeat(v.length));
}