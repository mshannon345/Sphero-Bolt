//Programmer: Miles Shannon
//Team Member: Billy Felton
////Bolt ID:SB-52F9
//Date: 4.24.24
//Program: My Mini Course
//Program URL:https://edu.sphero.com/program/16752495/edit

//Billy Felton Checkpoint 1
async function startProgram() {
	await roll( 80, 80, 2),
	await delay(1);

//Miles Shannon Checkpoint 2
	await roll(-25, 94 , 2),
	await delay(1);

//Billy Felton - PC#30 - Checkpoint 3 - Purple
	setMainLed({ r: 255, g: 0, b: 255 }),
		await roll (-152, 83, 2),
		await delay(1);

//Billy Felton - PC#30 - Checkpoint 4 - Red & Audio
await speak("At the light, turn left", true),
	setMainLed({ r: 255, g: 0, b: 0 }),
		await roll (87, 120, 2),
		await delay(1);
}