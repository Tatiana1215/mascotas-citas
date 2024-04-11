

let datos = []
let informacion = true;
let cadacard = null;
let validaciones = true

function enviar() {

    // // validacion()
    if (!validacion()) {
        document.getElementById("citas").textContent = "";
    } else {
        if (informacion === true) {

            let inf = {}
            inf = {

                nombre: document.getElementById("nom").value,
                propietario: document.getElementById("prop").value,
                telefono: document.getElementById("tel").value,
                fecha: document.getElementById("fecha").value,
                hora: document.getElementById("hora").value,
                opcions: document.getElementById("op").value,
                sintomas: document.getElementById("sin").value

            }
            document.getElementById("citas").textContent = "";
            datos.push(inf);
            console.log(inf)
            console.log(datos)

            limpiar()

        } else {
            datos[cadacard].nombre = document.getElementById("nom").value,
                datos[cadacard].propietario = document.getElementById("prop").value,
                datos[cadacard].telefono = document.getElementById("tel").value,
                datos[cadacard].fecha = document.getElementById("fecha").value,
                datos[cadacard].hora = document.getElementById("hora").value,
                datos[cadacard].opcions = document.getElementById("op").value,
                datos[cadacard].sintomas = document.getElementById("sin").value
            document.getElementById("citas").textContent = ""
            informacion = true
            limpiar()
        }
        document.getElementById("Alerta1").setAttribute("style", "display:block !important")
        document.getElementById("mensaje1").textContent = "Los datos fueron exitosamente enviados"
        setTimeout(() => {
            document.getElementById("Alerta1").setAttribute("style", "display:none !important")
            document.getElementById("mensaje1").textContent = ""

        }, 5000)
        pintar
    }

}
function limpiar() {
    document.getElementById("nom").value = ""
    document.getElementById("prop").value = ""
    document.getElementById("tel").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("op").value = ""
    document.getElementById("sin").value = ""
}

// 

function validacion() {
    if (!document.getElementById("nom").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite el nombre"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (!document.getElementById("prop").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite el nombre del propietario"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false

    } else if (!document.getElementById("tel").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite su numero de telefono"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (document.getElementById("tel").value.length < 10) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite su numero de telefono que sea mayor a  10 numeros"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (!document.getElementById("fecha").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite la fecha "

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display: !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (new Date() > new Date(document.getElementById("fecha").value)) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite la fecha actual"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (!document.getElementById("hora").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite la hora"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (parseInt(document.getElementById("hora").value.split(":")[0]) < 6 || parseInt(document.getElementById("hora").value.split(":")[0]) >= 19) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor digite la hora en los horarios establecios de 6:00Am a 7:00Pm"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (!document.getElementById("op").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor seleccione que tipo de mascota es?"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false
    } else if (!document.getElementById("sin").value) {
        document.getElementById("Alerta").setAttribute("style", "display:block !important")
        document.getElementById("mensaje").textContent = "Por favor escriba cuales son los sintomas que tiene su mascota"

        setTimeout(() => {
            document.getElementById("Alerta").setAttribute("style", "display:none !important")
            document.getElementById("mensaje").textContent = ""
        }, 3000);
        return false //aca me esta diciendo que si es falso muestra el error y no envia la infomacion

    } else {
        return true //si es verdadero envia la informacion

    }
}
// function selector(){
//     let select=datos.find(Element => Element.)
// }
let imagenesmascotas = {
    Gato: "img/cat1.jpg",
    Perro: "img/dog1.jpg",
    Conejo: "img/conejo1.jpg",
    Cerdo: "img/mini ping.jpg",
    Pato: "img/pato.jpg",
    Pez: "img/pez.jpg"

}

function pintar() {
    // document.getElementById("contenedor").textContent=""
    datos.forEach((item, i) => {
        console.log(item)
        let div = document.createElement("div")
        div.setAttribute("id", `card-${i}`);
        // div.setAttribute("id","todascard")
        div.classList.add('tarjetas')

        //  div.setAttribute("id", `cita-${cita.id}`);
        // div.setAttribute("id", `card${cita.id}`);


        let animal = document.createElement("div")
        animal.setAttribute("id", "animales")

        let img = document.createElement("img");
        img.setAttribute("id", "imagenani")
        img.src = imagenesmascotas[item.opcions]
        animal.appendChild(img)

        let opciones = document.createElement("h1");
        opciones.setAttribute("id", "opciones");
        opciones.textContent = item.opcions
        animal.appendChild(opciones);
        div.appendChild(animal)


        let nombreContainer = document.createElement("div"); // Contenedor para el título y el nombre
        nombreContainer.setAttribute("class", "nombre-container");

        let nombreTitulo = document.createElement("div");
        nombreTitulo.setAttribute("id", "cartinformacion")
        nombreTitulo.innerHTML = `<b> Nombre:</b> ${item.nombre}`;
        nombreContainer.appendChild(nombreTitulo);


        let propietariotitulo = document.createElement("div")
        propietariotitulo.setAttribute("id", "cartinformacion")
        propietariotitulo.innerHTML = `<b>Propietario: </b>${item.propietario}`
        nombreContainer.appendChild(propietariotitulo)

        let telefonotitulo = document.createElement("div")
        telefonotitulo.setAttribute("id", "cartinformacion")
        telefonotitulo.innerHTML = `<b>Telefono:</b>${item.telefono}`
        nombreContainer.appendChild(telefonotitulo)



        let fechatitulo = document.createElement("div")
        fechatitulo.setAttribute("id", "cartinformacion")
        fechatitulo.innerHTML = `<b>Fecha: </b>${item.fecha}`
        nombreContainer.appendChild(fechatitulo)


        let horatitulo = document.createElement("div");
        horatitulo.setAttribute("id", "cartinformacion")
        horatitulo.innerHTML = `<b>Hora:</b> ${item.hora}`
        nombreContainer.appendChild(horatitulo)


        let sintomastitulo = document.createElement("div");
        sintomastitulo.setAttribute("id", "cartinformacion");
        sintomastitulo.innerHTML = `<b>Síntomas:</b>${item.sintomas}`
        nombreContainer.appendChild(sintomastitulo)


        let botones = document.createElement("div")
        botones.setAttribute("id", "botones")

        let eliminar = document.createElement("button")
        eliminar.setAttribute("id", "eliminar")
        eliminar.textContent = "⨷"
        botones.appendChild(eliminar)
        eliminar.addEventListener("click", () => {

            datos.splice(i, 1);
            div.remove();

        })
        let editar = document.createElement("button")
        editar.setAttribute("id", "editar")
        editar.textContent = "Editar📝"
        botones.appendChild(editar)



        editar.addEventListener("click", () => {
            informacion = false;
            document.getElementById("nom").value = item.nombre
            document.getElementById("prop").value = item.propietario
            document.getElementById("tel").value = item.telefono
            document.getElementById("fecha").value = item.fecha
            document.getElementById("hora").value = item.hora
            document.getElementById("op").value = item.opcions
            document.getElementById("sin").value = item.sintomas

            cadacard = i;

        })

        let select = document.createElement("select");
        // select.setAttribute("id", `select`);
        select.setAttribute("id", `select-${i}`);
        select.classList.add('selectop')
        let op = ["Abierta", "Cerrada", "Anulada"];
        op.forEach((estado) => {
            let option = document.createElement("option");
            // setAttribute("id", "op")
            option.textContent = estado;
            select.appendChild(option);

        });
        select.addEventListener('change', (event) => {
            // Actualizar el estado de la cita cuando cambie el select
            datos[i].estado = event.target.value;
        });

        if (item.estado && op.includes(item.estado)) {//Estamos berificando si el estado de la cita existe y si se cambio a otro estado
            select.value = item.estado;// aca se guar el estado selecciona y lo muestra
        } else {
            select.value = "Abierta"; // Establecer estado inicial a "Abierta"
        }

        console.log(datos);


        botones.appendChild(select)
        nombreContainer.appendChild(botones)
        div.appendChild(nombreContainer)

        document.getElementById("citas").appendChild(div);
    })




}

document.addEventListener("DOMContentLoaded", function () {
    // Agregar evento de cambio al select HTML existente
    const selectHtml = document.getElementById('estadocita');
    selectHtml.addEventListener('change', filtrarCards);


    // Llamar a la función para mostrar todas las citas al cargar la página
    pintar();
});

function filtrarCards() {
    // Obtener el valor seleccionado en el select HTML
    const estadoSeleccionado = document.getElementById('estadocita').value;

    // Iterar sobre todas las cartas y mostrar u ocultar según el estado seleccionado
    datos.forEach((item, i) => {
        const card = document.getElementById(`card-${i}`);
        const selectValue = document.getElementById(`select-${i}`).value;
        if (estadoSeleccionado === 'todos' || estadoSeleccionado === selectValue) {
            card.style.display = 'block'; // Mostrar la carta
            // card.classList.add('grid-display');// Agregar la clase para mostrar la tarjeta
        } else {
            card.style.display = 'none'; // Ocultar la carta
        }
        console.log(selectValue)
        console.log(estadoSeleccionado)
    });
    // pintar()
}




