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






