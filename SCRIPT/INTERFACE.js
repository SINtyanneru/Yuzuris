/**
 * マウス/キーボードの管理
 */
let MOUSE_POS = {X:document.body.clientWidth/2, Y:document.body.clientHeight/2};//マウスの位置、初期値は真ん中
let MOUSE_CLICK_POS = {X:0, Y:0};
let MOUSE_BTN = [false, false, false];//マウスのボタンの状態
let MOUSE_DRAG = false;
let KEYBORD = {};

//読み込み完了
window.addEventListener("load", (e)=>{
	window.addEventListener("keydown", (e)=>{
		KEYBORD = {
			KEY_CODE:e.keyCode,
			NAME:e.key,
			CTRL:e.ctrlKey,
			ALT:e.altKey,
			SHIFT:e.shiftKey,
			REPEAT:e.repeat
		};
	});
	
	window.addEventListener("keyup", (e)=>{
		KEYBORD = {};
	});
	
	//マウスを押す
	DISPLAY_EL.addEventListener("mousedown", (e)=>{
		if(e.button === 0){//Left側を押した
			MOUSE_BTN[0] = true;
		}
		if(e.button === 1){//Center側を押した
			MOUSE_BTN[1] = true;
		}
		if(e.button === 2){//Right側を押した
			MOUSE_BTN[2] = true;
		}
	});
	
	//マウスを離す
	DISPLAY_EL.addEventListener("mouseup", (e)=>{
		if(e.button === 0){//Left側をはなした
			MOUSE_BTN[0] = false;
		}
		if(e.button === 1){//Center側をはなした
			MOUSE_BTN[1] = false;
		}
		if(e.button === 2){//Right側をはなした
			MOUSE_BTN[2] = false;
		}
	});
	
	//コンテキストメニュー
	DISPLAY_EL.addEventListener("contextmenu", (e)=>{
		e.preventDefault();
	});
	
	//マウス移動
	DISPLAY_EL.addEventListener('mousemove', (e)=>{
		const rect = DISPLAY_EL.getBoundingClientRect();
		const X = e.clientX - rect.left;
		const Y = e.clientY - rect.top;
	
		MOUSE_POS.X = X;
		MOUSE_POS.Y = Y;
	});
});