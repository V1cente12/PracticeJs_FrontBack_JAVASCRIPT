/*let numero = 5.3;
let palabra = 'hola josu';

let respuesta = false;

//const pi = 3;


palabra ='asdsdsdsdsd'
*/


//OPERADORES
/*
  let a =5;
let b = 2;

let usuario = 'qwer';
console.log('hola' + usuario);
*/

//operadores
/*
 let a = 5;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);

 */

//operadores de asignacion
/*let a=15;

a += 3;
console.log(a);
*/
/* let cadena ='hola josu';
let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);
console.log(cadena.length);
console.log(cadena.toUpperCase());*/
/*let cadena = 'hoola mi rey'; */


/* console.log(cadena.indexOf('o'));*/

/*console.log(cadena.replace('rey','king')); */

/* console.log(cadena.substring(3,5))*/

/*console.log(cadena.slice(-3)); */
/*console.log(cadena.trim()); */
/*console.log(cadena.endsWith('y')) */
/* console.log(cadena.includes('n'));
 console.log(cadena.includes(''));
 console.log(cadena.includes('n')); */
/* let nombre = 'vicente';
 let apellido ='calderon';
 let edad = 20;

 console.log('hola '+nombre+' '+apellido+'. Tiene '+edad); */


/*const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('introducce el primer numero');
let b = prompt('introducce el segundo numero');
let c = prompt('introducce el tecer numero');

numbers.textContent = `los numeros introducidos son ${a}, ${b}, ${c}`;

if(a>=b && a>=c){

} */

/*let q = 5;

switch(q)
{
    case 1: console.log("numer tiene valor de 1");
    break;
    case 5: console.log("numer tiene valor de 5");
    break;
}



 */



/*let names = ['paco','jose','paula','maria'];
for (namme of names){
    console.log(namme);
}

for (namme in names){
    console.log(namme);
}
 */



/* const person ={
    name : 'vicente',
    age : '24',
    sons : ['errt','qwert']
}

console.log(person.name);
console.log(person.age);
console.log(person.sons);
console.log(person.sons[0]);
console.log(person.sons[1]);*/

/* class Persona{
    constructor(nombre, apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad


    }
}*/
/* class Libro{
    constructor(title, author,year,gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    getAuthor(){
        return this.author
    }
    bookInfo(){
       return `${this.title} es un libro de ${this.gender} escrito por ${this.author}
       en el año ${this.year}`
    }
    getGender(){

        return this.gender
    }
}

let libros = []
while(libros.length<2){
    let title = prompt('dame titulo')
    let author = prompt('dame autor')
    let year = prompt('dame yeaer')
    let gender = prompt('dame gender').toLowerCase()

    if(title != '' && author!='' && !isNaN(year) && year.length==4 && (gender== 'aventura'|| gender=='terror' || gender=='fantasia'))
    {
        libros.push(new Libro(title,author,year,gender))
    }
 }


const showAllBooks=()=>{
    console.log(libros)
 }


 const showauthors=()=>{
    let autores =[]
    for(const Libro of libros){
        autores.push(Libro.getAuthor());
    }
    console.log(autores.sort());
 }
 const showGender =()=>{
    const gender = prompt("ingroduce gender")
    for(const Libro of libros){
       if(Libro.getGender() == gender){
        console.log(Libro.bookInfo())
       }
    }

 }

 //showAllBooks()
 //showauthors()
 showGender()


 */
/* let word = "hola mundo";
 console.log(Array.from(word));
 console.log(word.split(" ")); */
/* const letters  =['b','a','z'];

 console.log(letters.sort()); */
/* const numbers =[12,25,47,84, 98,13]
 //numbers.forEach((number)=>console.log(number))
 numbers.forEach((number, index)=>console.log(`${number} esta en la posicion ${index}`))


 */
/*const words= ['html', 'css', 'javscript','php']
console.log(words.some(word => word.length)); */
/*const numbers =[12,25,47,84, 98,13]
numbers.map(number => console.loh numero*2) */

//plit operator
/* let users = ['javier', 'david', 'rosa', 'juan', 'mercedez']
let newUsers =['marta', 'jaime', 'laura']

//users.push(newUsers[0], newUsers[1],newUsers[2])

users.push(...newUsers);
console.log(users);
*/
//copiar arrays

// concatenar arrays
/*let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
//let arrayConcat = array1.concat(array2);
let arrayConcat = [...array1, ...array2];
console.log(arrayConcat);*/


//enviar un numero indefinido de argumentos aq una funcion  (parametros REST)
    /*const restParms = (...numbers) => {
        console.log(numbers);

    }

    restParms(1,2,3,4) */


//libreria math
//const numbers = [ -12,2,3,23,2]

/** console.log(Math.max(...numbers));
*/

//eliminar elementos duplicados
//console.log([...new Set(numbers)]);


/*
document.getElementById('id') - acceder a un elemento a traves de su id

document.queryselector('selectorCSS') - accede al primer elemento que coincida con el selector CSS

document.queryselectorall]('selectorCss') - accede a todos los elementos que coincidan con el selector cssm devuelve un nodelist
*/
/** const title = document.getElementById('title');
title.textContent = 'DOM  accediendo a nodos';
console.log(title);*/

//const paragraph = document.querySelector('.paragraph:nth-child(2)');
//console.log(paragraph);

//const paragraphs        = document.querySelectorAll('.paragraph');
//const paragraphsSpread  = [...document.querySelectorAll('.paragraph')];
//const paragraphsArray   = Array.from(document.querySelectorAll('.paragraph'));

//paragraphs[0].style.color = 'red';
//paragraphs.map(p=>p.style.color='green');
//paragraphsSpread.map(p=>p.style.color='green');
//paragraphsArray.map(p=>p.style.color='green');
//console.log(paragraphs);
//console.log("rama prueba");



//ATRIBUTOS Y CLASES
/**element.getAttribute('attribute')
element.getAttribute('attribute', value)

clases

element.classList.add('class','class',...)
element.classList.remove('class','class',...)
element.classList.toggle('class',[,force])
element.classList.contains('class')
element.classList.replace('oldClass', newClass)

atributos directos
id
value
 */
//const title = document.getElementById('title')
//const name = document.getElementById('name')



//console.log(name.getAttribute('id'))
//name.setAttribute('type', 'date')
//console.log(title);
//console.log(name);

//title.classList.add('main-title','other-title')
//title.classList.remove('title')
/**if(title.classList.contains('title')){
console.log('title tiene la clase title')
}
else{
    console.log('title no tiene la clase title' )
} */

//title.classList.replace('title', 'main-title')
/**console.log(title.innerHTML)
console.log(title.textContent) */
//console.log(name.value)


//EVENTOS

//Eventos de ratan: 
    // click - cuando pulsamos el boton izquierdo del ratan 
    // dbclick - cuando pulsamos dos veces seguidas el bot6n izquierdo del ratan 
    // mouseenter - cuando entramos en la zona que tiene el evento 
    // mouseleave - cuando salimos de la zona que tiene el evento 
    // mousedown - cuando pulsamos y no soltamos el boton izquierdo del ratan 
    // mouseup - cuando soltamos el boton izquierdo del ratan 
    // mousemove - cuando movemos el ratan 
//Eventos de teclado:
    // keydown - cuando pulsamos una tecla 
    // keyup - cuando soltamos una tecla 
    // keypress - cuando pulsamos una tecla y no la soltamos 



// const button = document.getElementById('button')
// const box = document.getElementById('box')
// const input = document.getElementById('input')

// button.addEventListener('click',() =>{
//     console.log('HIZO CLICK')
// })

// button.addEventListener('dblclick', ()=>{
//     console.log("dbole click")
// })

// box.addEventListener('mouseenter', () => {
//     box.classList.replace('red','green')
// })

// box.addEventListener('mouseleave', () => {
//     box.classList.replace('green','red')

// })


// box.addEventListener('mousedown', () =>{
//     console.log('haz pulsado en la caja');
// })

// box.addEventListener('mouseup', () =>{
//     console.log('haz soltado el boton izquiero en la caja');
// })

// box.addEventListener('mousemove', () =>{
//     box.classList.replace('red','green')
// })
// box.addEventListener('mouseleave', () =>{
//     box.classList.replace('green','red')
// })

// input.addEventListener('keydown', ()=>{
//     console.log('haz pulsado una tecla')
// })

// input.addEventListener('keyup', ()=>{
//     console.log('haz solado una tecla')
// })

// input.addEventListener('keypress', ()=>{
//     console.log('estas pulsando  una tecla')
// })


const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')


// input.addEventListener('keyup', (e) =>{
//     console.log(e.key)
// })

// addEventListener('click', (e) =>{
//     console.log(e)
// })

// button.addEventListener('click', (e) =>{
//     console.log(e)
// })

// const galery = document.getElementById('galery')
// const link = document.getElementById('link')

// // galery.addEventListener('click',(e) =>{
// //     e.target.classList.add('red')
// // })
// link.addEventListener('click', (e) =>{
//     e.preventDefault()
//     button.click()
// })
// form.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     console.log('el formulario se a enviado')
// })


// button.addEventListener('click', (e) =>{
//     input.value='haz echoi click'
// })

//CREAR E INSERTAR ELEMENTOS
/**
 * Crear un elemento: document.createElement(element) 
 * Escribir texto en un elemento: element.textContent texto 
 * Escribir HTML en un elemento: element.innerHTML codigo HTML 
 * 
 * AÑADIR UN ELEMENTO AL DOM :parent.appendChild(element) 

Fragmentos de codigo: document.createDocumentFragment()   */

const days = ['Lunes', 'Mertes', 'Miercoles., Thieves', 'Viernes', 'Sabado', 'Domingo'] 

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect') 

//const itemList = document.createElement('LI')

//daysList.appendChild(itemList)

title.innerHTML = 'dom  <span>crear e insertar elementos I</span> '

//itemList.textContent ='Lunes'
//console.log(daysList)

const fragment= document.createDocumentFragment()
// for(const day of days){
//     const itemList = document.createElement('LI')
//   itemList.textContent =day
//    fragment.appendChild(itemList)
// }

for(const day of days){
    const selectItem= document.createElement('OPTION')
    selectItem.setAttribute('value',day.toLowerCase())
    selectItem.textContent=day
    fragment.appendChild(selectItem)
}
selectDays.appendChild(fragment)














