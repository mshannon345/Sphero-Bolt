//Programmer: Billy Felton
//Team Member: Miles Shannon
//Bolt ID: SB-52F9
//Date: 4.23.2024
//Program: Maze Competition
//Program URL: https://edu.sphero.com/program/16788325/edit

async function startProgram() {
	// Programmer: Billy Felton - Start Text & Audio Commit - Date: 
		await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 15, true),
		await speak("Start", true);


	// Programmer: Miles Shannon - Blue LED Checkpoint Commit - Date: 4.30.24
			await roll (0, 74, 2),
			await delay(1),
		setMainLed({ r: 0, g: 0, b: 255 });



	// Programmer: Billy Felton - Sound One Checkpoint Commit - Date:5.1.24
			await roll (90, 55, 2),
			await delay(1),
			await Sound.Effects.Laser.play(true);


	// Programmer: Miles Shannon - Red LED Checkpoint Commit - Date: 5.1.24
			await roll((getHeading() + 90), 40, 2),
			await delay(1),
			await roll((getHeading() + 40), 39, 2),
			await delay(1),
		setMainLed({ r: 255, g: 0, b: 0 });



	// Programmer: Billy Felton - Sound Two Checkpoint Commit - Date: 5.2.24
			await roll((getHeading() - 90), 23, 2),
			await delay(1),
			await roll((getHeading() - 90), 43, 2),
			await delay(1),
			await roll((getHeading() + 85), 23, 2),
			await Sound.Effects.Explosion.play(true);
	
	// Programmer:  Miles Shann- Green LED Checkpoint Commit - Date: 4.2.24
			await roll((getHeading() + 90) , 28, 2),
			await delay(1),
			setMainLed({ r: 0, g: 255, b: 0 });



	// Programmer: Billy Felton - Purple LED & Sound Three Checkpoint Commit - Date:
			await roll((getHeading() - 90) , 26, 2),
			await delay(1),
			await roll((getHeading() - 90) , 40, 2),
			await delay(1),
			await roll((getHeading() - 40) , 23, 2),
			await delay(1),
			setMainLed({ r: 255, g: 0, b: 255 }),
			await Sound.Effects.Applause.play(true);



	// Programmer:  - Finish Text & Audio Commit - Date:
}