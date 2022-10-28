const $login = document.querySelector(".login");
const $modal = document.querySelector(".modal");
const $form_login = document.getElementById("form_login");
$form_login.insertAdjacentHTML("afterend", `<p class="error_login"></p>`);
const $error_login = document.querySelector(".error_login");
const $login_item = document.querySelector(".login");
const $cadastro_item = document.querySelector(".cadastro");
const $sesion_item = document.querySelector(".sesion");
const $navbar = document.querySelector(".navbar");
const $usuario = document.querySelector(".usuario");
const $navbar_toogler = document.querySelector(".navbar-toggler");
/*Funciones*/
const Revisar_Usuario = async (user, password) => {
  let devolver = false;
  try {
    let respuesta = await fetch("http://localhost:5555/user");
    if (!respuesta.ok) {
      throw { statusText: respuesta.statusText, status: respuesta.status };
    }
    let respuesta_json = await respuesta.json();
    respuesta_json.forEach((element) => {
      if (element.email === user && element.password === password) {
        localStorage.user_medisol = JSON.stringify(element);
        devolver = true;
      }
    });
  } catch (error) {
    let error_message = error.statusText || "Ocurrio un error";
    $error_login.innerHTML = `${error_message}:${error.status}`;
  }
  return devolver;
};

const Actualizar_Sesion = () => {
  const usuario = JSON.parse(localStorage.user_medisol);
  if (usuario) {
    //Hay una sesion abierta
    $login_item.classList.add("out");
    $cadastro_item.classList.add("out");
    $sesion_item.classList.add("active_drop");
    $navbar.classList.add("active_drop");
    $navbar_toogler.classList.add("active_drop");
    $usuario.innerHTML = `${usuario.name}`;
  } else {
    $login_item.classList.remove("out");
    $cadastro_item.classList.remove("out");
    $sesion_item.classList.remove("active_drop");
    $navbar.classList.remove("active_drop");
    $navbar_toogler.classList.remove("active_drop");
  }
};
/*Eventos del navegador*/
document.addEventListener("click", (event) => {
  if (event.target.matches(".login")) {
    $modal.classList.add("show_modal");
  }
  if (event.target.matches(".btn-close")) {
    $modal.classList.remove("show_modal");
  }
  if (event.target.matches(".logout")) {
    let confirmar = confirm("Esta seguro de sair da sesão");
    if (confirmar) {
      localStorage.removeItem("user_medisol");
      location.reload();
    }
  }
});
document.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.target.matches("#form_login")) {
    const user = event.target.user.value;
    const password = event.target.password.value;
    let coincide = await Revisar_Usuario(user, password);
    if (coincide) {
      //Aqui con la sesion abierta;
      window.location.replace("../index.html");
    } else {
      $error_login.innerHTML = "Usuario ou Senha Incorretos";
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  Actualizar_Sesion();
});
