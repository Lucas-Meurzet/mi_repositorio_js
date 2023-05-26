/* 

Simulacro Lucas Meurzet 
[]
{}
*/

class Persona{
    constructor(id, nombre, edad){
        this.id = id,
        this.nombre = nombre,
        this.edad = edad
    }
}

const persona1 = new Persona (1,"Matías Pérez", 15);
const persona2 = new Persona (2,"Camila Rodríguez", 25);
const persona3 = new Persona (3,"Juan Cruz", 18);
const persona4 = new Persona (4,"Elías Maidana", 14);
const persona5 = new Persona (5,"Santiago Cuña", 17);
const persona6 = new Persona (6,"Osvaldo Martínez", 29);
const persona7 = new Persona (7,"Florencia Warner", 23);
const persona8 = new Persona (8,"Laura Mendez", 16);
const persona9 = new Persona (9,"Anabella Loza", 19);
const persona10 = new Persona (10,"Nahuel Peña", 13);

const PERSONAS = [persona1,persona2,persona3,persona4,persona5,persona6,persona7,persona8,persona9,persona10];


function saludoTrabajador(){
    let = saludoGuardia ="Estas personas quieren ingresar al establecimiento, por favor verifique la edad de los mismos. Solo se permiten mayores de 18 años. \n";
    PERSONAS.forEach(e => {
        saludoGuardia += `${e.id}. Cliente:${e.nombre} Edad: ${e.edad} \n`
    })

    let repuestaGuardia = parseInt(prompt(saludoGuardia));
    return PERSONAS.find(elem => elem.id == repuestaGuardia)
};

saludoTrabajador()


/* Función de filtrado de "Personas", para saber si son menores o mayores de edad */

let entradaMayores = PERSONAS.filter((Persona) => {

    if(Persona.edad >= 18){
        return true;
    } else {
        return false;
    }   
}) 

console.table (entradaMayores);


function entradaBoliche(){
    if (Persona.edad >= 18){
        Persona = "Podes ingresar al establecimiento"
    } else Persona = "Sos menor de edad, no podes ingresar"
};

entradaBoliche()


