document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signupButton = document.getElementById("signup");

    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginButton = document.getElementById("login");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (signupButton && nameInput && emailInput && passwordInput) {
        signupButton.addEventListener("click", () => {
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value;

            if (!nameValue || !emailValue || !passwordValue) {
                return alert("Veuillez remplir tous les champs");
            }

            users.push({ name: nameValue, email: emailValue, password: passwordValue });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Inscription réussie !\nNom : " + nameValue + "\nEmail : " + emailValue);

            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        });
    }

    if (loginButton && loginEmail && loginPassword) {
        loginButton.addEventListener("click", () => {
            const emailValue = loginEmail.value.trim();
            const passwordValue = loginPassword.value;

            if (!emailValue || !passwordValue) {
                return alert("Veuillez remplir tous les champs");
            }

            const existingUser = users.find(user => user.email === emailValue && user.password === passwordValue);

            if (existingUser) {
                alert("Connexion réussie");
            } else {
                alert("Utilisateur inconnu. Vous allez être redirigé vers la page d'inscription.");
                window.location.href = "login.html";
            }
        });
    }
});