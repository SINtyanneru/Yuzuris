let TEST_X = 0;
let TEST_Y = 0;


function onTick(){
	switch(KEYBORD.KEY_CODE){
		case 39:
			TEST_X++;
			break;
		case 37:
			TEST_X--;
			break;

		case 38:
			TEST_Y--;
			break;
		case 40:
			TEST_Y++;
			break;
	}

	DRAW_OBJ[0] = {
			TYPE:"RECT",
			X:TEST_X,
			Y:TEST_Y,
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