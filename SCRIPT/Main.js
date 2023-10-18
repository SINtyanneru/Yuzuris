let DISPLAY_EL = document.getElementById("DISPLAY");
let CTX = DISPLAY_EL.getContext('2d');

//読み込み完了
window.addEventListener("load", (e)=>{
	DISPLAY_EL.width = window.innerWidth;
	DISPLAY_EL.height = window.innerHeight;

	CONSOLE_PUSH("REngine V0.5");
	CONSOLE_PUSH("GameName: Yuzuris");

	setInterval(() => {
		DRAW();

		onTick();
	}, 1);
});

//画面リサイズ
window.addEventListener("resize", (e)=>{
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	DISPLAY_EL.width = window.innerWidth;
	DISPLAY_EL.height = window.innerHeight;

	DRAW();
});