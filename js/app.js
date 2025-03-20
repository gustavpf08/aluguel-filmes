let sectionMovie1 = document.querySelector("#game-1");
let buttonStatus1 = sectionMovie1.querySelector(".dashboard__item__button");

let sectionMovie2 = document.querySelector("#game-2");
let buttonStatus2 = sectionMovie2.querySelector(".dashboard__item__button");

let sectionMovie3 = document.querySelector("#game-3");
let buttonStatus3 = sectionMovie3.querySelector(".dashboard__item__button");

function changingTextArea(value) {
  if (value.innerHTML === "Alugar") {
    value.innerHTML = "Devolver";
  } else {
    value.innerHTML = "Alugar";
  }
}

function alterarStatus(value) {
  if (value === 1) {
    buttonStatus1.classList.toggle("dashboard__item__button--return");
    changingTextArea(buttonStatus1);
  }

  if (value === 2) {
    buttonStatus2.classList.toggle("dashboard__item__button--return");
    changingTextArea(buttonStatus2);
  }

  if (value === 3) {
    buttonStatus3.classList.toggle("dashboard__item__button--return");
    changingTextArea(buttonStatus3);
  }
}
