const inpBtn = document.querySelectorAll('[data-box]');
const winLos = document.getElementById('WinLos');
const newgame = document.getElementById('NewGame');
const restart = document.getElementById('Restart');

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

// newgame.addEventListener('click',);
// restart.addEventListener('click',);
let playerX = "X";
let playerO = "O";
let firstPlayer = true;
let secondPlayer = true;

inpBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (firstPlayer) {
      box.innerHTML = playerO;
      secondPlayer = true;
      firstPlayer = false;
    } else if (secondPlayer) {
      box.innerHTML = playerX;
      firstPlayer = true;
    }
    checkWinner();
    box.disabled = true;
  });
});

const showWinner = (winner) => {
  winLos.innerText = `Congratulations, winner is ${winner}`;

}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = inpBtn[pattern[0]].innerText;
    let pos2Val = inpBtn[pattern[1]].innerText;
    let pos3Val = inpBtn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val !="") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        secondPlayer = false;
        showWinner(pos1Val); 
      }
    }
}  
}