const imagens = [
  "vaca.png",
  "vaca.png",
  "porco.png",
  "porco.png",
  "ovelha.png",
  "ovelha.png",
  "coelho.png",
  "coelho.png",
  "pato.png",
  "pato.png",
  "cachorro.png",
  "cachorro.png",
  "gato.png",
  "gato.png",
  "tigre.png",
  "tigre.png",
];

let openCards = [];

let shuffleImagens = imagens.sort(() => Math.random() - 0.5);

for (let i = 0; i < imagens.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  let img = document.createElement("img");
  img.src = "/src/img/" + shuffleImagens[i];
  img.classList.add("hidden");
  box.appendChild(img);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === imagens.length) {
    alert("Você venceu");
  }
}
