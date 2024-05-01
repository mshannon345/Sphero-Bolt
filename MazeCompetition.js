//Programmer: Miles Shannon
//Team Member: Billy Felton
////Bolt ID:SB-52F9
//Date: 4.30.24
//Program: Maze Competition
//Program URL:https://edu.sphero.com/program/16788324/edit

async function startProgram() {
	//Programmer: Billy Felton - Start Text & Audio Chackpoint Commit - Date: 4.30.24 
		await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 15, true)
		await speak("Start", true),
		


	// Programmer: Miles Shannon - Blue LED Checkpoint Commit - Date: 4.30.24
			await roll (0, 72, 2),
			await delay(1),
		setMainLed({ r: 0, g: 0, b: 255 });



	// Programmer: Billy Felton - Sound One Checkpoint Commit - Date: 5.1.24
			await roll (90, 55, 2),
			await delay(1),
			await Sound.Effects.Laser.play(true);




	//Programmer: -Red LED Checkpoint Date:



	//Programmer: -Sound Two Checkpoint Commit - Date:



	//Programmer: -Green LED Checkpoint Date:



	//Programmer: -Purple LED & Sound Three Checkpoint Date:



	//Programmer: -Text and Audio Commit - Date


}