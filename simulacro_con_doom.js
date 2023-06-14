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

const cardsClientes = document.getElementById("cardsClientes");
PERSONAS.forEach((Persona => {
    let divCard = document.createElement("div")
    divCard.id = Persona.id
    divCard.innerHTML = `
    <div class="card" style="width: 18rem;" id="card-background">
    <div class="card-body">
      <h5 class="card-title">${Persona.nombre}</h5>
      <p class="card-text">Tenés ${Persona.edad}</p>
      <input type="button" class="btn btn-primary" value="Verificar Edad" onclick="verificarEdad()"> 
    </div>
  </div>`

    cardsClientes.append(divCard)   
}))

function verificarEdad (){

    const cardElegida = document.getElementById("card-background")
    
    if(Persona.edad >= 18){
        cardElegida.style.backgroundColor = "green"
    }else{
        cardElegida.style.backgroundColor = "red"
    }    
}



