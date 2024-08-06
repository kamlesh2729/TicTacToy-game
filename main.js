const inpBtn = document.querySelectorAll('[data-box]');
const winLos = document.getElementById('WinLos');
const newgame = document.getElementById('NewGame');
const restart = document.getElementById('Restart');
const Winline = document.querySelector('.line');

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

const enablesbox = () => {
  for (let box of inpBtn) {
    box.disabled = false;
    box.innerHTML = '';
    
  }
 }

const disablesbox = () => {
  for (let box of inpBtn) {
    box.disabled = true;
  }
}

const winline = () => {
  
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = inpBtn[pattern[0]].innerText;
    let pos2Val = inpBtn[pattern[1]].innerText;
    let pos3Val = inpBtn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val !="") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        secondPlayer = false;
        disablesbox();
        showWinner(pos1Val); 
      }
    }
    const winpat = [pos1Val, pos2Val, pos3Val];
    console.log(winpat);
}  
}

const newG = () => {
  if (checkWinner) {
    firstPlayer = true;
    enablesbox();
    winLos.innerText = "Who's Winner ?";
  }
}

const reStart = () => {
  firstPlayer = true;
  enablesbox();
}

newgame.addEventListener("click", newG);
restart.addEventListener("click", reStart);