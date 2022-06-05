// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
// const Texto = "argentina campeona de la finalissima".toUpperCase();
// alert(Texto);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring)
// const Texto = "Sudamerica";
// const SubString = Texto.substring(0,5);
// alert(SubString);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
// const Texto = "Sudamerica";
// const SubString = Texto.substring (Texto.length - 3);
// alert(SubString);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
// const Texto = "sudamerica";
// const ResultadoFinal = Texto[0].toUpperCase() + Texto.substring(1).toLowerCase();
// alert(ResultadoFinal);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
// const Texto = "Argentina Campeona";
// const index = Texto.indexOf(' ');
// alert(index);


// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).
// const Texto1 = "argentina campeona"
//     .split(' ')
//     .map(text => text[0].toUpperCase() + text.substring(1).toLowerCase())
//     .join(' ');
// alert(Texto1);