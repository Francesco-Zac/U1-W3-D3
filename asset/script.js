function aggiungiElemento() {
  let myList = document.querySelector("ul");
  let elemento = document.createElement("li");
  let btnElimina = document.createElement("button");

  elemento.textContent = document.querySelector("input").value;
  btnElimina.textContent = "Elimina Elemento";

  btnElimina.style.marginLeft = "10px";
  btnElimina.addEventListener("click", function () {
    elemento.remove();
  });
  elemento.appendChild(btnElimina);
  myList.appendChild(elemento);
}

document.querySelector("button").addEventListener("click", aggiungiElemento);

function segnaComeCompletato(e) {
  let elementoLista = e.target;
  elementoLista.classList.toggle("Completato");
}

document.querySelector("ul").addEventListener("click", segnaComeCompletato);

function eliminaElemento(e) {
  let elementoDaEliminare = e.target;
  elementoDaEliminare.remove();
}

document.querySelectorAll("button")[1].addEventListener("click", eliminaElemento);
