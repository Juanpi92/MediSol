export class cita {
  constructor(doctor, consulta, usuario) {
    this._doctor = doctor;
    this._consulta = consulta;
    this._usuario = usuario;
  }
  get doctor() {
    return this._doctor;
  }
  set doctor(new_doctor) {
    this._doctor = new_doctor;
  }
  get consulta() {
    return this._consulta;
  }
  set consulta(new_consulta) {
    this._consulta = new_consulta;
  }
  get usuario() {
    return this._usuario;
  }
  set usuario(new_usuario) {
    this._usuario = new_usuario;
  }
}

export class address {
  constructor(cep, estado, cidade, bairro, rua, numero, complemento) {
    this._cep = cep;
    this._estado = estado;
    this._cidade = cidade;
    this._bairro = bairro;
    this._rua = rua;
    this._numero = numero;
    this._complemento = complemento;
  }
  get cep() {
    return this._cep;
  }
  set cep(new_cep) {
    this._cep = new_cep;
  }
  get estado() {
    return this._estado;
  }
  set estado(new_estado) {
    this._estado = new_estado;
  }
  get cidade() {
    return this._cidade;
  }
  set cidade(new_cidade) {
    this._cidade = new_cidade;
  }
  get bairro() {
    return this._bairro;
  }
  set bairro(new_bairro) {
    this._bairro = new_bairro;
  }
  get rua() {
    return this._rua;
  }
  set rua(new_rua) {
    this._rua = new_rua;
  }
  get numero() {
    return this._numero;
  }
  set numero(new_numero) {
    this._numero = new_numero;
  }
  get complemento() {
    return this._complemento;
  }
  set complemento(new_complemento) {
    this._complemento = new_complemento;
  }
}

export class usuario {
  constructor(nome, cpf, email, user, celular, address, senha, sexo) {
    this._nome = nome;
    this._cpf = cpf;
    this._email = email;
    this._user = user;
    this._celular = celular;
    this._address = address;
    this._senha = senha;
    this._sexo = sexo;
  }
  get nome() {
    return this._nome;
  }
  set nome(new_nome) {
    this._nome = new_nome;
  }
  get cpf() {
    return this._cpf;
  }
  set cpf(new_cpf) {
    this._cpf = new_cpf;
  }
  get email() {
    return this._email;
  }
  set email(new_email) {
    this._email = new_email;
  }
  get user() {
    return this._user;
  }
  set user(new_user) {
    this._nome = new_user;
  }
  get celular() {
    return this._celular;
  }
  set celular(new_celular) {
    this._nome = new_celular;
  }
  get address() {
    return this._address;
  }
  set address(new_address) {
    this._nome = new_address;
  }
  get senha() {
    return this._senha;
  }
  set senha(new_senha) {
    this._senha = new_senha;
  }
  get sexo() {
    return this._sexo;
  }
  set sexo(new_sexo) {
    this._sexo = new_sexo;
  }
}
