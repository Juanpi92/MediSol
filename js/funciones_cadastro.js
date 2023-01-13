export async function Buscar_CEP(cep) {
  try {
    let respuesta = await fetch(`https://viacep.com.br/ws/${cep}/json/ `);
    if (!respuesta.ok) {
      throw { statusText: respuesta.statusText, status: respuesta.status };
    }
    let respuesta_json = await respuesta.json();
    if (respuesta_json.erro === true) {
      return false;
    }
    return respuesta_json;
  } catch (error) {
    let error_message = error.statusText || "Ocurrio un error";
    $aqui.innerHTML = `${error_message}: ${error.status}`;
    return null;
  }
}

export async function Insertar_Usuario(new_usuario) {
  let url = "https://medisol-api.onrender.com/user";
  //Creo las opciones, pues es un envio
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      name: new_usuario.nome,
      username: new_usuario.user,
      email: new_usuario.email,
      password: new_usuario.senha,
      phone: new_usuario.celular,
      cpf: new_usuario.cpf,
      gender: new_usuario.sexo,
      address: {
        cep: new_usuario.address.cep,
        rua: new_usuario.address.rua,
        numero: new_usuario.address.numero,
        complemento: new_usuario.address.complemento,
        estado: new_usuario.address.estado,
        bairro: new_usuario.address.bairro,
        cidade: new_usuario.address.cidade,
      },
    }),
  };
  //Insertar-Create
  try {
    alert(
      "Obrigado por se registar na nossa plataforma, já pode desfrutar dos nossos serviços!!!"
    );
    let respuesta = await fetch(url, options);

    if (!respuesta.ok) {
      throw { statusText: respuesta.statusText, status: respuesta.status };
    }
  } catch (error) {
    let error_message = error.statusText || "Ocurrio un error";
    alert(`${error_message}:${error.status}`);
  }
}
