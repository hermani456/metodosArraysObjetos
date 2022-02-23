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

const traumatologiaNuevo = traumatologia.concat(traumatologia2)
console.log (traumatologiaNuevo)

const radiologiaNuevo = radiologia.slice(1, -1)
console.log (radiologiaNuevo)

// funcion que crea las tablas recibiento 3 argumentos, array, la clase y title
const creaTabla = (id, array, title) => {
   const tabla = document.querySelector(id)
   tabla.innerHTML = `<h3 class="text-center my-5">Consultas medicas ${title}</h3>`
   for (i = 0; i < array.length; i++) {
      const datos = `<p class="text-center">${array[i].HORA} - ${array[i].ESPECIALISTA} - ${array[i].PACIENTE} - ${array[i].RUT} - ${array[i].PREVISION}</p>`
   tabla.innerHTML += datos
   }
}
// creando las tablas para radiologia, traumatologia y dental
creaTabla("#consultas-medicas", dental, "Dental")



const totalConsultas = radiologia.concat(traumatologiaNuevo, dental)

// mapea solo los pacientes y separa sus nombres con un guion (join)
const pacientes = totalConsultas.map((paciente)=>{
   return paciente.PACIENTE
}).join(' - ')

// escribe la lista de pacientes en el dom
const escribirPacientes = document.querySelector('#listado-pacientes')
escribirPacientes.innerHTML = pacientes

// filtra la prevision a isapre para dental
const dentalFilter = dental.filter(previ => previ.PREVISION === "ISAPRE")


const dentalEscribir = dentalFilter.map((paciente)=>{
   return paciente.PACIENTE
}).join(' - ')

// escribe el resultado del filtro de dental en el dom
const escribeDentalFiltered = document.querySelector('#dental-filtrado')
escribeDentalFiltered.innerHTML = dentalEscribir


// filtra la prevision a isapre para dental
const traumatologiaFilter = traumatologiaNuevo.filter(previ => previ.PREVISION === "FONASA")


const traumatologiaEscribir = traumatologiaFilter.map((paciente)=>{
   return paciente.PACIENTE
}).join(' - ')

// escribe el resultado del filtro de dental en el dom
const escribeTraumatologiaFiltered = document.querySelector('#traumatologia-filtrado')
escribeTraumatologiaFiltered.innerHTML = traumatologiaEscribir



