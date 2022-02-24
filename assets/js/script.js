const radiologia = [
	{
		HORA: "11:00",
		ESPECIALISTA: "IGNACIO SCHULZ",
		PACIENTE: "FRANCISCA ROJAS",
		RUT: "9878782-1",
		PREVISION: "FONASA",
	},
	{
		HORA: "11:30",
		ESPECIALISTA: "FEDERICO SUBERCASEAUX",
		PACIENTE: "PAMELA ESTRADA",
		RUT: "15345241-3",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "15:00",
		ESPECIALISTA: "FERNANDO WURTHZ",
		PACIENTE: "ARMANDO LUNA",
		RUT: "16445345-9",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "15:30",
		ESPECIALISTA: "ANA MARIA GODOY",
		PACIENTE: "MANUEL GODOY",
		RUT: "17666419-0",
		PREVISION: "FONASA",
	},
	{
		HORA: "16:00",
		ESPECIALISTA: "PATRICIA SUAZO",
		PACIENTE: "RAMON ULLOA",
		RUT: "14989389-K",
		PREVISION: "FONASA",
	},
]
const traumatologia = [
	{
		HORA: "8:00",
		ESPECIALISTA: "MARIA PAZ ALTUZARRA",
		PACIENTE: "PAULA SANCHEZ",
		RUT: "15554774-5",
		PREVISION: "FONASA",
	},
	{
		HORA: "10:00",
		ESPECIALISTA: "RAUL ARAYA",
		PACIENTE: "ANGÉLICA NAVAS",
		RUT: "15444147-9",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "10:30",
		ESPECIALISTA: "MARIA ARRIAGADA",
		PACIENTE: "ANA KLAPP",
		RUT: "17879423-9",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "11:00",
		ESPECIALISTA: "ALEJANDRO BADILLA",
		PACIENTE: "FELIPE MARDONES",
		RUT: "1547423-6",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "11:30",
		ESPECIALISTA: "CECILIA BUDNIK",
		PACIENTE: "DIEGO MARRE",
		RUT: "16554741-K",
		PREVISION: "FONASA",
	},
	{
		HORA: "12:00",
		ESPECIALISTA: "ARTURO CAVAGNARO",
		PACIENTE: "CECILIA MENDEZ",
		RUT: "9747535-8",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "12:30",
		ESPECIALISTA: "ANDRES KANACRI",
		PACIENTE: "MARCIAL SUAZO",
		RUT: "11254785-5",
		PREVISION: "ISAPRE",
	},
]
const dental = [
	{
		HORA: "8:30",
		ESPECIALISTA: "ANDREA ZUÑIGA",
		PACIENTE: "MARCELA RETAMAL",
		RUT: "11123425-6",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "11:00",
		ESPECIALISTA: "MARIA PIA ZAÑARTU",
		PACIENTE: "ANGEL MUÑOZ",
		RUT: "9878789-2",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "11:30",
		ESPECIALISTA: "SCARLETT WITTING",
		PACIENTE: "MARIO KAST",
		RUT: "7998789-5",
		PREVISION: "FONASA",
	},
	{
		HORA: "13:00",
		ESPECIALISTA: "FRANCISCO VON TEUBER",
		PACIENTE: "KARIN FERNANDEZ",
		RUT: "18887662-K",
		PREVISION: "FONASA",
	},
	{
		HORA: "13:30",
		ESPECIALISTA: "EDUARDO VIÑUELA",
		PACIENTE: "HUGO SANCHEZ",
		RUT: "17665461-4",
		PREVISION: "FONASA",
	},
	{
		HORA: "14:00",
		ESPECIALISTA: "RAQUEL VILLASECA",
		PACIENTE: "ANA SEPULVEDA",
		RUT: "14441281-0",
		PREVISION: "ISAPRE",
	},
]

// nueva tabla de datos traumatologia
const traumatologia2 = [
	{
		HORA: "09:00",
		ESPECIALISTA: "RENÉ POBLETE",
		PACIENTE: "ANA GELLONA",
		RUT: "13123329-7",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "09:30",
		ESPECIALISTA: "MARIA SOLAR",
		PACIENTE: "RAMIRO ANDRADE",
		RUT: "12221451-K",
		PREVISION: "FONASA",
	},
	{
		HORA: "10:00",
		ESPECIALISTA: "RAUL LOYOLA",
		PACIENTE: "CARMEN ISLA",
		RUT: "10112348-3",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "10:30",
		ESPECIALISTA: "ANTONIO LARENAS",
		PACIENTE: "PABLO LOAYZA",
		RUT: "13453234-1",
		PREVISION: "ISAPRE",
	},
	{
		HORA: "12:00",
		ESPECIALISTA: "MATIAS ARAVENA",
		PACIENTE: "SUSANA POBLETE",
		RUT: "14345656-6",
		PREVISION: "FONASA",
	},
]

// uniendo la nueva lista de traumatologia con la lista antigua
const traumatologiaNuevo = traumatologia.concat(traumatologia2)

// elimina el primer y ultimo elemento de radiologia
const radiologiaNuevo = radiologia.slice(1, -1)

// funcion que crea las tablas recibiento 3 argumentos, array, la clase y title
const creaTabla = (id, array, title) => {
   const tabla = document.querySelector(id)
   tabla.innerHTML = `<h3 class="text-center my-5">Consultas medicas ${title}</h3>`
   for (i = 0; i < array.length; i++) {
      const datos = `<p class="text-center">${array[i].HORA} - ${array[i].ESPECIALISTA} - ${array[i].PACIENTE} - ${array[i].RUT} - ${array[i].PREVISION}</p>`
   tabla.innerHTML += datos
   }
}
// imprime al dom la lista de dental separadas por guion
creaTabla("#consultas-medicas", dental, "Dental")

// callback para los map
const pacienteFilter = paciente => paciente.PACIENTE

// une todos los arrays en uno para poder imprimir la lista de todos los pacientes
const totalConsultas = radiologia.concat(traumatologiaNuevo, dental)

// mapea solo los pacientes y separa sus nombres con un guion (join)
const pacientes = totalConsultas.map(pacienteFilter).join(' - ')

// escribe la lista de pacientes en el dom
const escribirPacientes = document.querySelector('#listado-pacientes')
escribirPacientes.innerHTML = pacientes

// callback isapre
const previIsapre = previ => previ.PREVISION === "ISAPRE"

// filtra la prevision a isapre para dental
const dentalFilter = dental.filter(previIsapre)

// mapea solo los pacientes y separa sus nombres con un guion (join)
const dentalEscribir = dentalFilter.map(pacienteFilter).join(' - ')

// escribe el resultado del filtro de dental en el dom
const escribeDentalFiltered = document.querySelector('#dental-filtrado')
escribeDentalFiltered.innerHTML = dentalEscribir

// callback fonasa
const previFonasa = previ => previ.PREVISION === "FONASA"

// filtra la prevision a fonasa para traumatologia
const traumatologiaFilter = traumatologiaNuevo.filter(previFonasa)

// mapea solo los pacientes y separa sus nombres con un guion (join)
const traumatologiaEscribir = traumatologiaFilter.map(pacienteFilter).join(' - ')

// escribe el resultado del filtro de traumatologia en el dom
const escribeTraumatologiaFiltered = document.querySelector('#traumatologia-filtrado')
escribeTraumatologiaFiltered.innerHTML = traumatologiaEscribir