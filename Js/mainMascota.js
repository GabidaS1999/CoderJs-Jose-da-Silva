let mascotas = mascotasMock.map((m) => {
    return new Mascota(
        m.nombreMascota,
        m.animal,
        m.raza,
        m.sexo,
        m.fechaNacimiento,
        m.nombreDueno,
        m.apellidos,
        m.direccion,
        m.contacto,
    );
}
);

const validarFormulario = (
    nombreMascota = "",
    animal = "",
    raza = "",
    sexo = "",
    fechaNacimiento = "",
    nombreDueno = "",
    apellidos = "",
    direccion = "",
    contacto = "",

) => {
    let mensajesDeError = [];
    if (nombreMascota.length == 0) {
        mensajesDeError.push("El nombre de la mascota es obligatorio");
    }
    if (animal.length == 0) {
        mensajesDeError.push("Debe colocar un tipo de animal");
    }
    if (raza.length == 0) {
        mensajesDeError.push("La raza es obligatoria");
    }
    if (sexo.length == 0) {
        mensajesDeError.push("Debe ingresar el sexo de la mascota");
    }
    if (fechaNacimiento.length == 0) {
        mensajesDeError.push("De no saber la fecha de nacimiento, debe ingresar una fecha aproximada");
    }
    if (nombreDueno.length == 0) {
        mensajesDeError.push("El nombre del dueño es obligatorio");
    }
    if (apellidos.length == 0) {
        mensajesDeError.push("El apellido del dueño es obligatorio");
    }
    if (direccion.length == 0) {
        mensajesDeError.push("La direccion es obligatoria");
    }
    if (contacto.length == 0) {
        mensajesDeError.push("Debe ingrear un numero de contacto");
    }
    return mensajesDeError;
}

const isExisteMascota = (mascotas = [], nombreAnimal = "") => {
    return mascotas.some((unaMascota) => unaMascota.nombreMascota === nombreAnimal);
}

const isExisteDueno = (mascotas = [], nombreDueno = "", apellidoDueno = "") => {
    return mascotas.some((unaMascota) => unaMascota.nombreDueno === nombreDueno);
}
const registrarMascota = (
    nombreMascota,
    animal,
    raza,
    sexo,
    fechaNacimiento,
    nombreDueno,
    apellidos,
    direccion,
    contacto,
) => {
    const errores = validarFormulario(
        nombreMascota,
        animal,
        raza,
        sexo,
        fechaNacimiento,
        nombreDueno,
        apellidos,
        direccion,
        contacto,
    );
    if (errores.length !== 0) {
        console.table(errores);
        return false;
    }



    let unaMascota = new Mascota(
        nombreMascota,
        animal,
        raza,
        sexo,
        fechaNacimiento,
        nombreDueno,
        apellidos,
        direccion,
        contacto,
    );

    mascotas.push(unaMascota);
    console.table(mascotas);
    return true;
};
alert("Bienvenido al registro de mascotas de Veterinaria Oli, por favor acceda a la consola para obtener mas detalles")

function cargarMacota() {

        let nombreMascota = prompt("Ingrese el nombre de la mascota")
        let animal = prompt("¿Que animal es?")
        let raza = prompt("¿Que raza es?")
        let sexo = prompt("¿De que sexo es?")
        let fechaNacimiento = prompt("¿Cuando nació?")
        let nombreDueno = prompt("¿Como se llama el/la dueño/a")
        let apellidos = prompt("¿Cual es su apellido?")
        let direccion = prompt("Su direccion")
        let contacto = prompt("Telefono de contacto")

        if (registrarMascota(
            nombreMascota,
            animal,
            raza,
            sexo,
            fechaNacimiento,
            nombreDueno,
            apellidos,
            direccion,
            contacto)) {
            console.table(mascotas)
        } else {
            alert("Verifica los datos ingresados")
        }

        if (isExisteMascota(mascotas, nombreMascota) && isExisteDueno(mascotas, nombreDueno)) {
            alert(`La mascota de nombre ${nombreMascota} que pertenece a ${nombreDueno} ya esta ingresada`)
            console.table([
                `La mascota de nombre ${nombreMascota} que pertenece a ${nombreDueno} ya esta ingresada`
            ]);
            console.table(mascotas);
        }
}
function buscadorMascotas() {
        let buscadorMascota = prompt("Ingrese el nombre de la mascota: ")
        let buscadorDueno = prompt("Ingrese el nombre del dueño: ")
        let nombreMascota = buscadorMascota;
        let nombreDueno = buscadorDueno
        if (isExisteMascota(mascotas, nombreMascota) && isExisteDueno(mascotas, nombreDueno)) {
            alert(`La mascota de nombre ${nombreMascota} que pertenece a ${nombreDueno} ya esta ingresada`)
            console.table([
                `La mascota de nombre ${nombreMascota} que pertenece a ${nombreDueno} ya esta ingresada`
            ]);
            console.table(mascotas);
        } else {
            alert("La mascota no existe")
        }
}
let pregunta = prompt("Seleccione la opcion correspondiente: 1- Cargar mascota 2-Buscar mascota");
while (pregunta == 1 || 2) {
    if (pregunta == 1) {
        cargarMacota()
    }
    if (pregunta == 2) {
        buscadorMascotas()
    }
    pregunta = prompt("Seleccione la opcion correspondiente: 1- Cargar mascota 2-Buscar mascota");
}
