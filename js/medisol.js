import { Actualizar_Sesion, Revisar_Usuario } from "./login.js";
const $modal = document.querySelector(".modal");
const $form_login = document.getElementById("form_login");
$form_login.insertAdjacentHTML("afterend", `<p class="error_login"></p>`);
const $error_login = document.querySelector(".error_login");
const $loader = document.querySelector(".loader");

/*Eventos del navegador*/
document.addEventListener("click", (event) => {
  if (event.target.matches(".login")) {
    $modal.classList.add("show_modal");
  }
  if (event.target.matches(".btn-close")) {
    $modal.classList.remove("show_modal");
    $form_login.reset();
    $error_login.innerHTML = "";
  }
  if (event.target.matches(".logout")) {
    let confirmar = confirm("Esta seguro de sair da sesão");
    if (confirmar) {
      localStorage.removeItem("user_medisol");
      location.reload();
    }
  }
});
document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.matches("#form_login")) {
    $loader.classList.add("show");
    setTimeout(async () => {
      const user = event.target.user.value;
      const password = event.target.password.value;
      let coincide = await Revisar_Usuario(user, password);
      if (coincide) {
        //Aqui con la sesion abierta;
        window.location.replace("../index.html");
      } else if (coincide === false) {
        $loader.classList.remove("show");
        $error_login.innerHTML = "Usuario ou Senha Incorretos";
      }
    }, 300);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  $form_login.reset();
  Actualizar_Sesion();
});
