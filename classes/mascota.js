class Mascota {
  constructor(
    nombreMascota,
    animal,
    raza,
    sexo,
    fechaNacimiento,
    nombreDueno,
    apellidos,
    direccion,
    contacto,
    
  ) {
    this.nombreMascota = nombreMascota;
    this.animal = animal;
    this.raza = raza;
    this.sexo = sexo;
    this.fechaNacimiento = fechaNacimiento;
    this.nombreDueno = nombreDueno;
    this.apellidos = apellidos;    
  }

  toString = () => {
    return this.nombreMascota + " de la raza " + this.raza;
  };
}
