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
