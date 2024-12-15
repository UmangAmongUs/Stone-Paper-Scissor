let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const win = document.getElementById("user");
const lose = document.querySelector("#comp");

choices.forEach((choice) => {
  // console.log(choice)
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  console.log("");
  console.log("User choice =", userchoice);
  let compchoice = compgenerate();
  console.log("comouter choice =", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userwin === "stone") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "stone" ? true : false;
    } else {
      userwin = compchoice === "stone" ? false : true;
    }
    showwinner(userwin);
  }
};

const showwinner = (userwin) => {
  if (userwin) {
    let w = parseInt(win.innerHTML);

    console.log("YOU WIN", w);
    msg.innerHTML = "YOU WIN!";
    win.innerHTML = w + 1;
    msg.style.backgroundColor = "green";
  } else {
    let l = parseInt(lose.innerHTML);
    console.log("YOU LOSE");
    msg.innerHTML = "YOU LOSE!";
    lose.innerHTML = ++l;
    msg.style.backgroundColor = "red";
  }
};

const compgenerate = () => {
  const option = ["stone", "paper", "scissor"];
  let randint = Math.floor(Math.random() * 3);
  return option[randint];
};

const drawgame = () => {
  console.log("DRAW");
  msg.innerHTML = "DRAW!";
  let w = parseInt(win.innerHTML);
  let l = parseInt(lose.innerHTML);
  win.innerHTML = ++w;
  lose.innerHTML = ++l;
  console.log("winnner", win.innerHTML);
  msg.style.backgroundColor = "yellow";
};
