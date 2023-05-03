const d = document
const $horas = d.getElementById("horas")
const $ampm = d.getElementById("ampm")
const $minutos = d.getElementById("minutos")
const $segundos = d.getElementById("segundos")
const $diaSemana = d.getElementById("diaSemana")
const $dia = d.getElementById("dia")
const $mes = d.getElementById("mes")
const $year = d.getElementById("year")

const actualizarHora = function () {



    let fecha = new Date()
    let horas = fecha.getHours()
    let ampm
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()
    let diaSemana = fecha.getDay()
    let dia = fecha.getDate()
    let mes = fecha.getMonth()

    let year = fecha.getFullYear()

    const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    $diaSemana.textContent = semana[diaSemana]
    $dia.textContent = dia
    $mes.textContent = meses[mes]
    $year.textContent = year

    //Horas minutos y segundos
    if (horas >= 12) {
        horas = horas - 12
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    if (horas == 0) {
        horas = 12
    }
    // if (horas < 10) { horas = "0" + horas }
    // if (minutos < 10) { minutos = "0" + minutos }
    // if (segundos < 10) { segundos = "0" + segundos }
    $horas.textContent = (horas < 10) ? horas = "0" + horas : horas
    $ampm.textContent = ampm
    $minutos.textContent = (minutos < 10) ? minutos = "0" + minutos : minutos
    $segundos.textContent = (segundos < 10) ? segundos = "0" + segundos : segundos

}
//document.addEventListener("DOMContentLoaded", actualizarHora)
actualizarHora()
setInterval(actualizarHora, 1000)






