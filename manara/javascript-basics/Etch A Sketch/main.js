const gridContainer = document.querySelector(".grid-container");

let gridsNumber = 16;
const GRIDS_SIZE = `calc(100% / ${gridsNumber})`;
const GRIDS_BORDER = "0.0625rem solid #acacacfc";
let gridsColor = "#e0e0e0";
let gridsHoverColor = "black";

function setGridBoxes() {
  for (let i = 1; i <= gridsNumber ** 2; i++) {
    const gridBox = document.createElement("div");
    gridBox.className = "box";
    gridBox.style.width = GRIDS_SIZE;
    gridBox.style.height = GRIDS_SIZE;
    gridBox.style.border = GRIDS_BORDER;
    gridBox.style.backgroundColor = gridsColor;

    gridContainer.append(gridBox);
  }
}
setGridBoxes();

function setGridsHover() {
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = gridsHoverColor;
    });
  });
}

setGridsHover();
