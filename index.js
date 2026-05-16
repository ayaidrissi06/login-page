const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupButton = document.getElementById("signup");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login");

signupButton.addEventListener("click", () => {
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

loginButton.addEventListener("click", () => {
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value;

    if (!emailValue || !passwordValue) {
        return alert("Veuillez remplir tous les champs");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === emailValue && user.password === passwordValue);

    if (existingUser) {
        alert("Connexion réussie");
    } else {
        alert("Veuillez vous inscrire");
    }
});