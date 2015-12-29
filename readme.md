Minecraft Name Banner
-----
An npm script used to created a banned-players.json file to help your server combat spammy alts using leaked lists. Uses Mojang API to get the UUID of the account.

1. Replace the string of the variable 'umUsernames' with your file
2. node banned-test.js
3. Open /processed bans/processed-banned-players.json
3. Add the new data over to your banned-players.json

ToDos:
-----
* Make a GUI for admins, html page likely
* Easily select file from inner folder
* Concatenate the new array to the end of the original banned-players.json file
* Take TooManyRequestsException into consideration when dealing with large lists