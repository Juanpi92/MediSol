const Actualizar_Citas = async () => {
  const $table = document.querySelector(".table");
  const $template = document.getElementById("tabla_template").content;
  const $fragmento = document.createDocumentFragment();
  try {
    let respuesta = await fetch("http://localhost:5555/lista_espera");
    if (!respuesta.ok) {
      throw { statusText: respuesta.statusText, status: respuesta.status };
    }
    let respuesta_json = await respuesta.json();
    console.log(respuesta_json);
    respuesta_json.forEach((element, index) => {
      //Aqui construir la tabla
      $template.querySelector(".indice").textContent = index + 1;
      $template.querySelector(".name").textContent = element.name;
      $template.querySelector(".doctor").textContent = element.doctor;
      $template.querySelector(".consulta").textContent = element.consulta;
      let $clone = document.importNode($template, true);
      $fragmento.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragmento);
  } catch (error) {
    let error_message = error.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p class="error_login"><b>${error_message}:${error.status}</b></p>`
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Actualizar_Citas();
});
