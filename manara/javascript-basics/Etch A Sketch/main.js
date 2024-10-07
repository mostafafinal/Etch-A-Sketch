let gridsNumber = 16;
const GRIDS_BORDER = "0.0625rem solid #acacacfc";
let gridsColor = "#e0e0e0";
let gridsHoverColor = "black";

const gridContainer = document.querySelector(".grid-container");
const controls = document.querySelectorAll(".controls button");
controls.forEach((control) => {
  control.style.cursor = "pointer";
  control.addEventListener("click", changBtnAction);
});
const resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", resizeGridBoxes);

function setGridBoxes() {
  // grid should be n*n e.g. 16×16 grid boxes
  for (let i = 1; i <= gridsNumber ** 2; i++) {
    const gridBox = document.createElement("div");
    gridBox.className = "box";
    gridBox.style.width = `calc(100% / ${gridsNumber})`;
    gridBox.style.height = `calc(100% / ${gridsNumber})`;
    gridBox.style.border = GRIDS_BORDER;
    gridBox.style.backgroundColor = gridsColor;

    gridContainer.append(gridBox);
  }
}
setGridBoxes();

const gridBoxes = document.querySelectorAll(".box");
gridBoxes.forEach((box) => {
  box.style.cursor = "pointer";
  box.addEventListener("mouseover", setGridsHover);
});

function setGridsHover() {
  if (gridsHoverColor == "random") {
    this.style.backgroundColor = randomizeColor();
  }
  if (gridsHoverColor == "erase") {
    this.style.backgroundColor = gridsColor;
  }
  this.style.backgroundColor = gridsHoverColor;
}

function changBtnAction() {
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

function resizeGridBoxes() {
  if (
    document.getElementById("grids-amount").value < 2 ||
    document.getElementById("grids-amount").value > 100 ||
    document.getElementById("grids-amount").value === ""
  ) {
    return;
  }
  gridsNumber = document.getElementById("grids-amount").value;
  document.querySelectorAll(".box").forEach((box) => box.remove());
  setGridBoxes();
  const gridBoxes = document.querySelectorAll(".box");
  gridBoxes.forEach((box) => {
    box.style.cursor = "pointer";
    box.addEventListener("mouseover", setGridsHover);
  });
  document.getElementById("grids-amount").value = "";
}
