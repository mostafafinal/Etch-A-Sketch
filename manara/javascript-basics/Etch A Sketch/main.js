const gridContainer = document.querySelector(".grid-container");

let gridsNumber = 16;
const GRIDS_SIZE = `calc(100% / ${gridsNumber})`;
const GRIDS_BORDER = "0.0625rem solid #acacacfc";
let gridsColor = "#e0e0e0";
let gridsHoverColor = "black";
console.log(gridsHoverColor);

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
    box.style.cursor = "pointer";
    box.addEventListener("mouseover", (e) => {
      if (gridsHoverColor == "random") {
        e.target.style.backgroundColor = randomizeColor();
      }
      if (gridsHoverColor == "erase") {
        e.target.style.backgroundColor = gridsColor;
      }
      e.target.style.backgroundColor = gridsHoverColor;
    });
  });
}
setGridsHover();

function setControlsBtns() {
  document.querySelectorAll(".controls button").forEach((control) => {
    control.style.cursor = "pointer";
    control.addEventListener("click", btnAction);
  });
}
setControlsBtns();

function btnAction() {
  if (this.className == "black") {
    gridsHoverColor = "black";
  } else if (this.className == "grey") {
    gridsHoverColor = "grey";
  } else if (this.className == "rainbow") {
    gridsHoverColor = "random";
  } else if (this.className == "erase") {
    gridsHoverColor = "erase";
  } else if (this.className == "reset") {
    document
      .querySelectorAll(".box")
      .forEach((box) => (box.style.backgroundColor = gridsColor));
  }
}

function randomizeColor() {
  const R_RGB = Math.floor(Math.random() * 255);
  const G_RGB = Math.floor(Math.random() * 255);
  const B_RGB = Math.floor(Math.random() * 255);
  return `rgb(${R_RGB}, ${G_RGB}, ${B_RGB})`;
}
