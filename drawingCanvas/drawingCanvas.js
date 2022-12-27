const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;    // 두께 지정

function onClick(e) {
  // ctx.moveTo(0,0)     // 원점 고정하기
  ctx.lineTo(e.offsetX, e.offsetY);   // 클릭된 좌표(x, y) 저장
  ctx.stroke();                       // 선 그리기
}

canvas.addEventListener("click", onClick);