//Programmer: Miles Shannon
//Team Member: Billy Felton
//Bolt ID:SB-52F9
//Date: 4.16.24
//Program: Hello World - Sandbox
//Program URL:https://edu.sphero.com/program/16700410/edit

/*
async function startProgram() {

	setMainLed({ r: 5, g: 24, b: 236 });
	await speak("Hello Square", true);
	await delay(1);
	for (var helloSquare = 0; helloSquare < 4; helloSquare++) {
		setMainLed(getRandomColor());
		await Sound.Effects.Laser.play(true);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);

}
*/
async function startProgram() {
	await roll(0, 40, 2)
	await 2 
	await roll (-180, 40,2)
}