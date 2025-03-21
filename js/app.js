function changingTextArea(value) {
  if (value.innerHTML === "Alugar") {
    value.innerHTML = "Devolver";
  } else {
    value.innerHTML = "Alugar";
  }
}

function alterarStatus(value) {
  let sectionGame = document.querySelector(`#game-${value}`);
  let imgStatus = sectionGame.querySelector(".dashboard__item__img");
  let buttonStatus = sectionGame.querySelector(".dashboard__item__button");

  if (value == 1 || value == 2 || value == 3) {
    buttonStatus.classList.toggle("dashboard__item__button--return");
    imgStatus.classList.toggle("dashboard__item__img--rented");
    changingTextArea(buttonStatus);
  }
}
