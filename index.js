document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signupButton = document.getElementById("signup");

    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginButton = document.getElementById("login");

    const welcomeText = document.getElementById("welcome-text");
    const logoutButton = document.getElementById("logout");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

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
            localStorage.setItem("currentUser", JSON.stringify({ name: nameValue, email: emailValue }));

            alert("Inscription réussie !\nNom : " + nameValue + "\nEmail : " + emailValue);
            window.location.href = "welcome.html";
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
                localStorage.setItem("currentUser", JSON.stringify({ name: existingUser.name, email: existingUser.email }));
                alert("Connexion réussie");
                window.location.href = "welcome.html";
            } else {
                alert("Utilisateur inconnu. Vous allez être redirigé vers la page d'inscription.");
                window.location.href = "login.html";
            }
        });
    }

    if (welcomeText && logoutButton) {
        if (!currentUser) {
            alert("Veuillez vous connecter d'abord.");
            window.location.href = "index.html";
            return;
        }

        welcomeText.textContent = "Bienvenue, " + (currentUser.name || currentUser.email) + " ! Vous êtes connecté.";

        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        });
    }
});