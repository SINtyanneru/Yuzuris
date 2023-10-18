let DISPLAY_EL = document.getElementById("DISPLAY");
let CTX = DISPLAY_EL.getContext('2d');

//読み込み完了
window.addEventListener("load", (e)=>{
	DISPLAY_EL.width = document.body.clientWidth;
	DISPLAY_EL.height = document.body.clientHeight;

	CONSOLE_PUSH("REngine V0.5");
	CONSOLE_PUSH("GameName: Yuzuris");

	setInterval(() => {
		DRAW();

		onTick();
	}, 1);
});

//画面リサイズ
window.addEventListener("resize", (e)=>{
	WIDTH = document.body.clientWidth;
	HEIGHT = document.body.clientHeight;

	DISPLAY_EL.width = document.body.clientWidth;
	DISPLAY_EL.height = document.body.clientHeight;

	DRAW();
});