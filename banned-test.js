'use strict';
var fs = require('fs');
var request = require('request');

let stringArr;
let bannedArray;
var bannedObjectMaker = (uuid, name)=>{
	return {
	uuid, //8-4-4-4-12
    name,

    "created": "2015-01-01 00:01:49 +0200",
    "source": "(Unknown)",
    "expires": "forever",
    "reason": "Banned by an operator."}
}
// const bannedObject = {
//     "uuid": "", //8-4-4-4-12
//     "name": "",
//     "created": "2015-01-01 00:01:49 +0200",
//     "source": "(Unknown)",
//     "expires": "forever",
//     "reason": "Banned by an operator."
// }
const minecraftRequestURL = 'https://api.mojang.com/users/profiles/minecraft/';
const myName = 'lightrapid'

// fs.readFile('alts.txt', 'utf8', (err, data)=>{
// 	stringArr = data.split('\n');
// 	console.log(stringArr.length);
// 	for(smallName of stringArr){
// 		request.get(minecraftRequestURL+smallName,(error, response, body)=>{
			
// 		});
// 	}
// });
console.log(bannedObjectMaker('ded', 'ded2'));