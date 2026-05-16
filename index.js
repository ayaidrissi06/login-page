const nom=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");

const button=document.getElementById("signup");

button.addEventListener("click",function(){
    if(nom.value=="" || email.value=="" || password.value==""){
   const name = nom.value;
   const mail = email.value;
   const pass = password.value;
   if(name=="" || mail=="" || pass==""){
     return alert("Please fill in all the fields.");
   }
    }
    const users=JSON.parse(localStorage.getItem("users")) || [];
    users.push({nom: name, email: mail, password: pass});
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Signup successful! Name: ${name}, Email: ${mail}, Password: ${pass}`);
    nom.value=email.value=password.value="";
});
