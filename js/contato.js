let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mensagem = document.querySelector("#mensagem");
const $formulario = document.getElementById("form_contato");

setInterval(() => {
  VerificarInputs();
}, 100);

function VerificarInputs() {
  if (nome.value != "" && email.value != "" && assunto.value != "") {
    mensagem.disabled = false;
  } else {
    mensagem.disabled = true;
  }
}

function Llenar() {
  try {
    const usuario = JSON.parse(localStorage.user_medisol);
    nome.value = usuario.name;
    email.value = usuario.email;
    email.disabled = true;
    nome.disabled = true;
  } catch (error) {
    nome.value = "";
    email.value = "";
    email.disabled = false;
    nome.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $formulario.reset();
  Llenar();
  VerificarInputs();
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#form_contato")) {
    alert("Obrigado por entrar em contato. Responderemos em breve!!!");
    //enviar mediante fetch
    fetch("https://formsubmit.co/ajax/medisol.atendimentos@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nome.value,
        email: email.value,
        subject: assunto.value,
        message: mensagem.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    $formulario.reset();
    Llenar();
    VerificarInputs();
  }
});
