let buttonStatus1 = document.querySelector("#game-1");
let valueButton1 = buttonStatus1.querySelector(".dashboard__item__button");

let buttonStatus2 = document.querySelector("#game-2");
let valueButton2 = buttonStatus2.querySelector(".dashboard__item__button");

let buttonStatus3 = document.querySelector("#game-3");
let valueButton3 = buttonStatus3.querySelector(".dashboard__item__button");

function changingTextArea(value) {
  if (value.innerHTML === "Alugar") {
    value.innerHTML = "Devolver";
  } else {
    value.innerHTML = "Alugar";
  }
}

// deve ter uma forma de selecionar o #game-3 e, na mesma linha de código e
// selecionar a ancora "a".

function alterarStatus(value) {
  if (value === 1) {
    valueButton1.classList.toggle("dashboard__item__button--return");
    changingTextArea(valueButton1);
  }

  if (value === 2) {
    valueButton2.classList.toggle("dashboard__item__button--return");
    changingTextArea(valueButton2);
  }

  if (value === 3) {
    valueButton3.classList.toggle("dashboard__item__button--return");
    changingTextArea(valueButton3);
  }
}
