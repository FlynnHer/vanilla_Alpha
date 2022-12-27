const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// 집 모양 만들어 보기
ctx.fillRect(200,200, 50,300);
ctx.fillRect(450,200, 50,300);
ctx.strokeRect(325,400, 50,100);
ctx.fillRect(200,200, 250,20);

ctx.moveTo(200, 200);
ctx.lineTo(350, 100);
ctx.lineTo(500, 200);
ctx.fill()