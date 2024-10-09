const ticTac = document.querySelector(".tic-tac");
const resetBtn = document.querySelector(".rstbtn");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1");

let currentPlayer = "X";
let count = 0;
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame(e) {
  if (e.target.className !== "tic-tac") {
    if (e.target.innerText === "") {
      e.target.innerText = currentPlayer;
      count++;
      console.log(count);

      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    if (count === 9) {
      h1[0].innerText = ` Match Draw`;
    }
  }
}

ticTac.addEventListener("click", startGame);

function winner() {
  winningConditions.forEach((item) => {
    const index0 = item[0];
    const index1 = item[1];
    const index2 = item[2];
    if (
      boxes[index0].innerText !== "" &&
      boxes[index1].innerText !== "" &&
      boxes[index2].innerText !== ""
    ) {
      if (
        boxes[index0].innerText === boxes[index1].innerText &&
        boxes[index0].innerText === boxes[index2].innerText
      ) {
        boxes[index0].classList.add("winner-class");
        boxes[index1].classList.add("winner-class");
        boxes[index2].classList.add("winner-class");
        h1[0].innerText = `Winner is ${boxes[index0].innerText}`;
        ticTac.removeEventListener("click", startGame);
      }
    }
  });
}
resetBtn.addEventListener("click", (e) => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("winner-class");
  });
  h1[0].innerText = "Tic Tac Toe";
  ticTac.addEventListener("click", startGame);
  currentPlayer = "X";
  count = 0;
});
