import { address, usuario } from "../models/clases.js";
import { Buscar_CEP, Insertar_Usuario } from "./funciones_cadastro.js";
const $formulario = document.getElementById("formulario_cadastro");
const $aqui = document.querySelector(".cep_container");
$aqui.insertAdjacentHTML("beforeend", `<p class="error_login"></p>`);
const $error_login = document.querySelector(".error_login");

//Evento del click en buscar
document.addEventListener("click", async (event) => {
  const $cep = document.querySelector("#cep").value;
  if (event.target.matches(".buscar_cep")) {
    event.preventDefault();
    $formulario.rua.value = "-";
    $formulario.numero.value = "-";
    $formulario.bairro.value = "-";
    $formulario.complemento.value = "-";
    $formulario.cidade.value = "-";
    $formulario.estado.value = "-";
    const expreg_cep = /^[0-9]{5}-[0-9]{3}$/;
    if (expreg_cep.test($cep)) {
      let cep = $cep.replace("-", "");
      let address = await Buscar_CEP(cep);
      if (address !== null) {
        if (address !== false) {
          $error_login.innerHTML = "";
          $formulario.rua.value = address.logradouro;
          $formulario.numero.value = address.numero || "-";
          $formulario.bairro.value = address.bairro;
          $formulario.complemento.value = address.complemento || "-";
          $formulario.cidade.value = address.localidade;
          $formulario.estado.value = address.uf;
        } else {
          $error_login.innerHTML = "CEP no existe";
        }
      }
    } else {
      $error_login.innerHTML = "CEP invalido";
    }
  }
});
//inicio
document.addEventListener("DOMContentLoaded", () => {
  $formulario.reset();
});

//Evento Submit
document.addEventListener("submit", (event) => {
  if (event.target === $formulario) {
    event.preventDefault();
    if (event.target.senha.value === event.target.confirm_senha.value) {
      let cep = event.target.cep.value;
      let estado = event.target.estado.value;
      let cidade = event.target.cidade.value;
      let bairro = event.target.bairro.value;
      let rua = event.target.rua.value;
      let numero = event.target.numero.value;
      let complemento = event.target.complemento.value;
      let my_address = new address(
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
        complemento
      );

      let nome = event.target.nome.value;
      let cpf = event.target.cpf.value;
      let email = event.target.email.value;
      let user = event.target.user.value;
      let celular = event.target.celular.value;
      let senha = event.target.senha.value;
      let sexo = event.target.gender.value;
      let new_usuario = new usuario(
        nome,
        cpf,
        email,
        user,
        celular,
        my_address,
        senha,
        sexo
      );
      Insertar_Usuario(new_usuario);
      $formulario.reset();
    } else {
      alert("Os campos de senha não correspondem");
    }
  }
});
