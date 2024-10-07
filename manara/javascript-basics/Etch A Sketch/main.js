const gridContainer = document.querySelector(".grid-container");

let gridsNumber = 16;
const GRIDS_BORDER = "0.0625rem solid #acacacfc";
let gridsColor = "#e0e0e0";
let gridsHoverColor = "black";

function setGridBoxes() {
  for (let i = 1; i <= gridsNumber ** 2; i++) {
    const gridBox = document.createElement("div");
    gridBox.className = "box";
    gridBox.style.width = `calc(100% / ${gridsNumber})`;
    gridBox.style.height = `calc(100% / ${gridsNumber})`;
    gridBox.style.border = GRIDS_BORDER;
    gridBox.style.backgroundColor = gridsColor;

    gridContainer.append(gridBox);
  }
  setGridsHover();
  setControlsBtns();
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

function setControlsBtns() {
  document.querySelectorAll(".controls button").forEach((control) => {
    control.style.cursor = "pointer";
    control.addEventListener("click", changBtnAction);
  });
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

const resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", resizeGridBoxes);

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
  document.getElementById("grids-amount").value = "";
}
