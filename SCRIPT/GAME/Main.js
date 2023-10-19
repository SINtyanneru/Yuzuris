let CENTER = (window.innerWidth - 20) / 2;
let TETRIMINO_X = CENTER;
let TETRIMINO_Y = 100;

let KEY_TEMP = "";

setInterval(() => {
	if(TETRIMINO_Y < 500){
		TETRIMINO_Y += 20;
	}else{
		TETRIMINO_Y = 100;
	}
}, 500);

function onTick(){
	if(JSON.stringify(KEYBORD) === "{}" || KEYBORD.REPEAT){
		KEY_TEMP = "";
	}
	switch(KEYBORD.KEY_CODE){
		case 39:
			if(KEY_TEMP !== KEYBORD.KEY_CODE){
				KEY_TEMP = KEYBORD.KEY_CODE;
				if(TETRIMINO_X < CENTER + 100){
					TETRIMINO_X += 20;
				}
			}
			break;
		case 37:
			if(KEY_TEMP !== KEYBORD.KEY_CODE){
				KEY_TEMP = KEYBORD.KEY_CODE;
				if(TETRIMINO_X > CENTER - 100){
					TETRIMINO_X -= 20;
				}
			}
			break;
	}

	DRAW_OBJ = [
		{
			TYPE:"RECT",
			X:TETRIMINO_X,
			Y:TETRIMINO_Y,
			W:20,
			H:20,
			PLUGIN:[
				{
					TYPE:"FILL",
					COLOR:"green"
				}
			]
		},
		{
			TYPE:"RECT",
			X:CENTER - 100,
			Y:100,
			W:220,
			H:500,
			PLUGIN:[
				{
					TYPE:"STROKE",
					COLOR:"green"
				}
			]
		}
	];
}