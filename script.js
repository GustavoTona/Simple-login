function logar(){

let login = document.getElementById("user").value;
let password = document.getElementById("password").value;

if (login == "admin" && password == "admin") {
    alert("Sucesso!");
    location.href = "home.html";
} else {
    alert("Usuário ou senha incorreto");
}

}