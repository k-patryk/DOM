const button = document.querySelector("button");
const lista = document.querySelector("#items");

function dodajElement() {
	const iloscElementow = lista.children.length + 1;
	const nowyElement = document.createElement("li");
	nowyElement.classList.add("item");
	nowyElement.textContent = `Item ${iloscElementow}`;
	lista.appendChild(nowyElement);
}

button.addEventListener("click", dodajElement);
