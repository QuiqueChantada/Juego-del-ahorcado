'use strict';

const words = ['palmera', 'sauce', 'roble', 'pino', 'alcornoque', 'encina', 'naranjo'];

const h2 = document.querySelector('h2');
const form = document.forms.formulario;
const boton = document.querySelector('button');
const div = document.querySelector('#div1');
const input2 = document.querySelector('input');
let mistakes = 6;
let count = 0;
const input = [];
const nombre = form.elements.wordWanted;

//Añadimos un texto creado desde JS
const attents = document.createElement('div');
attents.innerHTML = `Tienes <strong>6 intentos</strong>. Buena suerte! :)`;
div.prepend(attents);
console.log(div);

//Creamos una función para seleccionar la palabra del array
function getRandomWord (array) {
    const num = Math.floor(Math.random() * array.length);
    return array[num];
}

//Sustituimos las letras por guiones
function initGame (array) {
    const word = getRandomWord(array);

    console.log(word);

    let hiddenWord = '';

    for (let i = 0; i < word.length; i++) {
        hiddenWord += '_';
}

//Mostramos la palabra con guiones en pantalla
h2.textContent = hiddenWord;

//Les añadimos un espacio entre letras y las convertimos en mayúscula
h2.style.letterSpacing = '35px';
h2.style.textTransform = 'Uppercase';

return (word);
}


//Guardamos en una variable el valor de la palabra
const randomWord = initGame (words);
console.log(randomWord);

//Función para cambiar la imagen
function changeImage () {
  document.getElementById('img1').src = `img/ahorcado_${mistakes}.png`;
}


//Creamos una función manejadora
function handleSubmitForm(e) {
    //Evitamos la recarga de la página
    e.preventDefault();
    //Reseteamos el input del formulario
    form.reset();
    //Pusheamos el input
    input.push(nombre.value);
    //Recorremos el array

    // Algo hay mal aquí porque el valor que me sale del input es un valor vacío
    for (let i = 0; i < randomWord.length; i++){
        if (input === randomWord) {
            //Aquí es donde estoy más perdido
            // Tenemos que cambiar el guión por la letra acertada. ¿?
            //Tenemos que descontar los guiones y comparar hasta que gane
            alert ('Has ganado. Enhorabuena!');
            break;
            }
            //Mientras el valor sea contador de errores sea mayor que 0, continuamos el bucle. 
         else {
           while (mistakes > 0) {
            mistakes--;
            changeImage();
            alert(`Te quedan ${mistakes} intentos`);
            }        
                alert('Has perdido. Inténtalo otra vez :)')
                break;
            }

        }  
}


//Añadimos el evento a la función manejadora
form.addEventListener('submit',handleSubmitForm);












//function handleClickButton () {
  //mistakes--;
 // alert(`Te quedan ${mistakes}`);  
//}

  //  mistakes++;
  //if (mistakes === words.length) endGame();

//boton.addEventListener('click', handleClickButton);

//for( let i = 0; i < randomWord.length; i++ ){
 //   const span = paragraph.createElement( 'span' );
   // paragraph.appendChild( 'span' );
//}

//let selectWord = 0;
//let usedLetters = 0;
//let hits = 0;


//const addLetter = letter => {
  //  const letterElement = document.createElement( 'span' );
    //letterElement.innerHTML = letter.toUpperCase();
   // usedLettersElement.appendChild( letterElement );
//}



//const wrongLetter = () => {
  //  mistakes++;
    //if (mistakes === 0) endGame();
//}

//const correctLetter = () => {
  //  const 
