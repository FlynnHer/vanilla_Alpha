const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
  "#e67e22",
  "#f39c12",
  "#d35400",
  "#27ae60",
  "#2ecc71",
  "#2980b9",
  "#2980b9"
] // https://flatuicolors.com/

ctx.lineWidth = 2;    // 두께 지정

function onClick(e) {
  ctx.beginPath();
  ctx.moveTo(0,0)     // 원점 고정하기
  const color = colors[Math.floor(Math.random() *colors.length)];
  ctx.strokeStyle = color;            // 색상 선택
  ctx.lineTo(e.offsetX, e.offsetY);   // 클릭된 좌표(x, y) 저장
  ctx.stroke();                       // 선 그리기
}

canvas.addEventListener("click", onClick);