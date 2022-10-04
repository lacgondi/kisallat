import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

let list = [];

let hamburger = {
  name: "hamburger",
  kcal: 400,
};

let apple = {
  name: "apple",
  kcal: 50,
};

let orangeJ = {
  name: "orange juice",
  kcal: 30,
};

function newFav(title) {
	let span = document.createElement("span");
	span.textContent = " (" + title.kcal + ")";
	span.style.fontStyle = "italic";

	let del = document.createElement("button");
	del.textContent = "x";
	del.addEventListener("click", delRow);

	let li = document.createElement("li");
	li.textContent = title.name;
	li.classList.add("list-group-item");

	li.appendChild(span);
	li.appendChild(del);
	list.push(title);

	function delRow() {
		li.remove();
		let currentSum = parseInt(document.getElementById("sum").textContent);
		currentSum -= title.kcal;
		document.getElementById("sum").textContent = currentSum;
	}

	return li;
}

function addToList(code) {
	let parent = document.getElementById("list");
	switch (code) {
		case 1:
			console.log("Pic 1 clicked");
			parent.appendChild(newFav(hamburger));
			break;
		case 2:
			console.log("Pic 2 clicked");
			parent.appendChild(newFav(apple));
			break;
		case 3:
			console.log("Pic 3 clicked");
			parent.appendChild(newFav(orangeJ));
			break;

		default:
			console.log("Take this L");
			break;
	}
	sum();
}

function sum() {
	let sum = 0;
	list.forEach((element) => {
		sum += element.kcal;
	});
	document.getElementById("sum").textContent = sum;
}

function empty() {
	document.getElementById("list").textContent = "";
	document.getElementById("sum").textContent = "0";
	list.forEach((element) => {
		list.pop(element);
	});
}

function init() {
  document.getElementById("pic1").addEventListener("click", function () {
    addToList(1);
  });
  document.getElementById("pic2").addEventListener("click", function () {
    addToList(2);
  });
  document.getElementById("pic3").addEventListener("click", function () {
    addToList(3);
  });
  document.getElementById('delButton').addEventListener('click',empty);
}

document.addEventListener("DOMContentLoaded", init);
