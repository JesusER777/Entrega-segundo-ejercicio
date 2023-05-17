// Declaracion de la Array:
const Lista_ejercicio = new Array(4);

const libro = { //declaración del Objeto libro:
    Titulo: "Doce hombres comunes y corrientes",
    Autor: "John MacArthur",
    Fecha: 2002,
    Dirección: "https://www.amazon.com/-/es/John-F-MacArthur/dp/0881137774"
}

const nacimiento = new Date(1999, 10, 24);
const naci = "fecha de nacimiento: " + nacimiento;

const pregunta = "¿Eres Desarrollador?: ";
const pre = pregunta + true;

const strin = "Edad: ";
const edad = strin + 23;


Lista_ejercicio[0] = "Nombre: Jesus Lovera";
Lista_ejercicio[1] = edad;
Lista_ejercicio[2] = pre; 
Lista_ejercicio[3] = naci; 
Lista_ejercicio[4] = libro; 




console.log(Lista_ejercicio)