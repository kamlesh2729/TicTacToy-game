const inpBtn = document.querySelectorAll('[data-box]');

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
        
let secondPlayer = true;

inpBtn.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("event work");
    if (secondPlayer) {
      box.innerHTML = "O";
      secondPlayer = false;
    } else {
      box.innerHTML = "X";
      secondPlayer = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(inpBtn[pattern[0]].innerText,
    //   inpBtn[pattern[1]].innerText,
    //   inpBtn[pattern[2]].innerText);
    let pos1Val = inpBtn[pattern[0]].innerText;
    let pos2Val = inpBtn[pattern[1]].innerText;
    let pos3Val = inpBtn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val !="") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log('winner', pos1Val);
        
      }
    }
}  
}