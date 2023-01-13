import { cita } from "../models/clases.js";

const Agregar_Lista = async (doctor, consulta, usuario) => {
  let url = "https://medisol-api.onrender.com/lista_espera";
  //Creo las opciones, pues es un envio
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      name: usuario,
      doctor: doctor,
      consulta: consulta,
    }),
  };
  //Insertar-Create
  try {
    alert("Sua consulta foi agendada. Entraremos em contato em breve");
    let respuesta = await fetch(url, options);
    if (!respuesta.ok) {
      throw { statusText: respuesta.statusText, status: respuesta.status };
    }
  } catch (error) {
    let error_message = error.statusText || "Ocurrio un error";
    alert(`${error_message}:${error.status}`);
  }
};

const Crear_Cita = (event) => {
  //Aqui crear la clase citas
  let new_cita = new cita(
    event.target.dataset.doctor,
    event.target.dataset.consulta,
    JSON.parse(localStorage.user_medisol).name
  );

  Agregar_Lista(new_cita.doctor, new_cita.consulta, new_cita.usuario);
};

document.addEventListener("click", (event) => {
  if (event.target.matches(".consulta")) {
    try {
      const usuario = JSON.parse(localStorage.user_medisol);
      //Logueado
      Crear_Cita(event);
    } catch (error) {
      alert("Você deve fazer login para desfrutar de nossos serviços");
    }
  }
});
