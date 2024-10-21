function validate() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const marketingConsent1 =
		document.getElementById("marketingConsent1").checked;
	const errorList = document.getElementById("errorList");
	errorList.innerHTML = "";

	let errors = [];

	if (!name) {
		errors.push("Pole 'Imię i nazwisko' jest wymagane.");
	}
	if (!email) {
		errors.push("Pole 'Adres e-mail' jest wymagane.");
	} else if (!email.includes("@")) {
		errors.push("Adres e-mail musi zawierać '@'.");
	}
	if (!marketingConsent1) {
		errors.push("Musisz zaakceptować 'Zgodę marketingową 1'.");
	}

	if (errors.length > 0) {
		errors.forEach((error) => {
			const li = document.createElement("li");
			li.textContent = error;
			errorList.appendChild(li);
		});
		return false;
	}
	return true;
}

function toggleConsents() {
	const allConsentsChecked = document.getElementById("allConsents").checked;
	document.getElementById("marketingConsent1").checked = allConsentsChecked;
	document.getElementById("marketingConsent2").checked = allConsentsChecked;

	document.getElementById("marketingConsent1").disabled = allConsentsChecked;
	document.getElementById("marketingConsent2").disabled = allConsentsChecked;

	if (!allConsentsChecked) {
		document.getElementById("marketingConsent1").disabled = false;
		document.getElementById("marketingConsent2").disabled = false;
	}
}
