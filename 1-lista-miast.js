let cities = [
	"Warsaw",
	"Berlin",
	"Paris",
	"London",
	"New York",
	"Tokio",
	"Moscow",
];

let list = document.createElement("ol");
list.className = "city-list";

cities.forEach((city) => {
	let listItem = document.createElement("li");
	listItem.className = "city";
	listItem.textContent = city;
	list.appendChild(listItem);
});

document.body.appendChild(list);
