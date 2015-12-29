'use strict';
var fs = require('fs');
var request = require('request');

let stringArr;
let bannedArray = [];
var bannedObjectMaker = (uuid, name)=>{
	return {
	uuid, //8-4-4-4-12
    name,
    "created": "2015-01-01 00:01:01 +0100",
    "source": "(Unknown)",
    "expires": "forever",
    "reason": "Banned by an operator."}
}
const minecraftRequestURL = 'https://api.mojang.com/users/profiles/minecraft/';
const altsEmails = 'alts.txt';
// const umUsernames = './banned folder/333 Unmigrated Usernames.txt';
const umUsernames = './banned folder/usernames2.txt';
// const umUsernames = 'testbans.txt';
fs.readFile(umUsernames, 'utf8', (err, data)=>{
	stringArr = data.split(/\r?\n/); //carriage return and newline possibly
	stringArr = stringArr.filter(function(elem, index, self) {
    	return index == self.indexOf(elem);
	});

	for(let smallName of stringArr){
		smallName = smallName.split(':')[0]; //for if unmigrated username with password
		request.get(minecraftRequestURL+smallName,(error, response, body)=>{
			try{
				let smallID = JSON.parse(body);
				if(smallID.hasOwnProperty('id')){
					smallID = smallID.id
					smallID = smallID.substring(0,8) + '-' + smallID.substring(8,12) + '-' + smallID.substring(12,16) + '-' + smallID.substring(16,20) + '-' + smallID.substring(20,32); //format the UUID
					bannedArray.push(bannedObjectMaker(smallID, smallName));
					let maxbans = JSON.stringify(bannedArray, null, 2);
					fs.writeFile('./ban processed/banned-players.json', maxbans,()=>{
						console.log('Finished writing', smallName);
					});
				}
			}catch(error){
				console.log(error);
			}
		});
	}
});