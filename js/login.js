const $login_item = document.querySelector(".login");
const $cadastro_item = document.querySelector(".cadastro");
const $sesion_item = document.querySelector(".sesion");
const $navbar = document.querySelector(".navbar");
const $usuario = document.querySelector(".usuario");
const $navbar_toogler = document.querySelector(".navbar-toggler");
const $loader = document.querySelector(".loader");
const $form_login = document.getElementById("form_login");
$form_login.insertAdjacentHTML("afterend", `<p class="error_login"></p>`);
const $error_login = document.querySelector(".error_login");

export function Login(event) {
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

export async function Revisar_Usuario(user, password) {
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
    console.log("error");
    $loader.classList.remove("show");
    let error_message = error.statusText || "Ocurrio un error";

    $error_login.innerHTML = `${error_message}: ${error.status}`;
    return null;
  }
  return devolver;
}

export function Actualizar_Sesion() {
  try {
    const usuario = JSON.parse(localStorage.user_medisol);
    $login_item.classList.add("out");
    $cadastro_item.classList.add("out");
    $sesion_item.classList.add("active_drop");
    $navbar.classList.add("active_drop");
    $navbar_toogler.classList.add("active_drop");
    $usuario.innerHTML = `${usuario.name}`;
  } catch (error) {
    $login_item.classList.remove("out");
    $cadastro_item.classList.remove("out");
    $sesion_item.classList.remove("active_drop");
    $navbar.classList.remove("active_drop");
    $navbar_toogler.classList.remove("active_drop");
  }
}
