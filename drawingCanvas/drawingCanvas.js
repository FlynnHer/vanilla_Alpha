const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");

const $lineWidth = document.getElementById("line-width");
const $color = document.getElementById("color")   // https://flatuicolors.com/
const $colorOptions = Array.from(document.getElementsByClassName("color-option"));
const $btnMode = document.getElementById("mode-btn");
const $btnClear = document.getElementById("clear-btn");
const $fileInput = document.getElementById("file");

//-- 초기화 ----------------------------
const CANVAS_W = 800;
const CANVAS_H= 800;
const INIT_COLOR = "#000000";
$canvas.width = CANVAS_W;
$canvas.height = CANVAS_H;
ctx.lineWidth = $lineWidth.value;      // 두께 지정
ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
let isPainting = false; // 원점 지정 Flag
let isFilling = false;  // 선/채우기 Flag

//-- Actions --------------------------
function onMouseMove(e) {
  if(isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function onMouseDown(e) {
  isPainting = true;
  ctx.moveTo(e.offsetX, e.offsetY);
}
function onMouseUp(e) {
  isPainting = false;
}
function onMouseClick(e) {
  if(isFilling) {
    ctx.fillRect(0,0, CANVAS_W, CANVAS_H)
  }
}

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}
function onColorClick(e) {
  ctx.strokeStyle = e.target.dataset.color; // 선 색상
  ctx.fillStyle = e.target.dataset.color;   // 칠하기 색상
  $color.value = e.target.dataset.color;    // 선택된 색상 표시
}
function btnModeClick(e) {
  if(isFilling) {
    isFilling = false;
    $btnMode.innerText = "Fill (선 그리기)"
  } else {
    isFilling = true;
    $btnMode.innerText = "Draw (채우기)"
  }
}
function btnClearClick(e) {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0, CANVAS_W, CANVAS_H);
  $color.value = INIT_COLOR;
  // ctx.stroke();
}
function onFileChange(e) {
  // console.log(e.target.files[0]);
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);  // 가상 메모리 이미지 임시 저장 주소
  const image = new Image();
  image.src = url;
  image.onload = function() {
    ctx.drawImage(image, 1, 1);
  }
}
//-- attach Event Listener -----------
$canvas.addEventListener("mousemove", onMouseMove);
$canvas.addEventListener("mousedown", onMouseDown);
$canvas.addEventListener("mouseup", onMouseUp);
$canvas.addEventListener("click", onMouseClick);
// canvas.addEventListener("mouseleave", onMouseUp);
$lineWidth.addEventListener("change", onLineWidthChange);
$color.addEventListener("change", onColorChange);
$colorOptions.forEach(color => color.addEventListener("click", onColorClick));
$btnMode.addEventListener("click", btnModeClick);
$btnClear.addEventListener("click", btnClearClick);
$fileInput.addEventListener("change", onFileChange);
// console.log($colorOptions)