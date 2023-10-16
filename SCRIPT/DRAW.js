/**
 * 描画関係
 */
let CONSOLE_TEXT = [];
let DRAW_OBJ = [];

let DRAW_TEMP = "";

function CONSOLE_PUSH(TEXT){
	CONSOLE_TEXT.push(TEXT);
}

function DRAW(){
	if(DRAW_TEMP !== JSON.stringify([CONSOLE_TEXT,DRAW_OBJ])){
		console.log("DRAW");
		DRAW_TEMP = JSON.stringify([CONSOLE_TEXT,DRAW_OBJ]);

		//全消し
		CTX.clearRect(0, 0, DISPLAY_EL.width, DISPLAY_EL.height);

		//コンソール
		for (let I = 0; I < CONSOLE_TEXT.length; I++) {
			const TEXT = CONSOLE_TEXT[I];
	
			CTX.font = "20px Arial"; // フォントサイズと種類を指定
			CTX.fillStyle = "white"; // テキストの色を指定
			CTX.fillText(TEXT, 0, ((I + 1) * 20));
		}
	}
}