const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;

    if (!nameValue || !emailValue || !passwordValue) {
        return alert("Veuillez remplir tous les champs");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name: nameValue, email: emailValue, password: passwordValue });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie !\nNom : " + nameValue + "\nEmail : " + emailValue);

    nameInput.value = "";
    email.value = "";
    password.value = "";
});