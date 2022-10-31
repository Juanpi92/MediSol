import { Actualizar_Sesion, Login } from "./login.js";
const $modal = document.querySelector(".modal");
const $form_login = document.getElementById("form_login");
const $error_login = document.querySelector(".error_login");

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
      window.location.replace("../index.html");
    }
  }
});
document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.matches("#form_login")) {
    Login(event);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  $form_login.reset();
  Actualizar_Sesion();
});
