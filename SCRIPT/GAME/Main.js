let CENTER = (window.innerWidth - 20) / 2;
let TEST_X = CENTER;

let KEY_TEMP = "";

function onTick(){
	if(JSON.stringify(KEYBORD) === "{}"){
		KEY_TEMP = "";
	}
	switch(KEYBORD.KEY_CODE){
		case 39:
			if(KEY_TEMP !== KEYBORD.KEY_CODE){
				KEY_TEMP = KEYBORD.KEY_CODE;
				if(TEST_X < CENTER + 100){
					TEST_X += 20;
				}
			}
			break;
		case 37:
			if(KEY_TEMP !== KEYBORD.KEY_CODE){
				KEY_TEMP = KEYBORD.KEY_CODE;
				if(TEST_X > CENTER - 100){
					TEST_X -= 20;
				}
			}
			break;
	}

	DRAW_OBJ[0] = {
			TYPE:"RECT",
			X:TEST_X,
			Y:100,
			W:20,
			H:20,
			PLUGIN:[
				{
					TYPE:"FILL",
					COLOR:"green"
				}
			]
		};
}