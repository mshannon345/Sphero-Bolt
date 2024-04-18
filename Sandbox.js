//Programmer: Miles Shannon
//Team Member: Billy Felton
//Bolt ID:SB-52F9
//Date: 4.16.24
//Program: Hello World - Sandbox
//Program URL:https://edu.sphero.com/program/16700410/edit

async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
