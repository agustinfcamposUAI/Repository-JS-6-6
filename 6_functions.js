// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
// const Suma = (a, b) => a + b;
// const Resultado = Suma(10, 15);
// console.log(Resultado);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
// const Suma = (a,b) => a+b;
// const Validacion = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         alert('Uno de los valores no es un número');
//         return NaN;
//     }

//     return a + b;
// };
// //Ejemplo 1: const resultado = Validacion('perro', 17);
// //Ejemplo 2: const resultado = Validacion(12, 17);
// console.log(resultado);

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
// let Numero = 24.8;
// if(Number.isInteger(Numero)) {
//     alert('La variable es entera');
//   }
// else{
//     alert('La variable no es entera');
// }


// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
// const sumaRedondeada = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         alert('Uno de los numeros no es un numero');
//         return NaN;
//     }

//     if ( !Number.isInteger(a) || !Number.isInteger(b)) {
//         alert('Alguno de los numeros tiene decimales');
//     }

//     return Math.round(a) + Math.round(b);
// };
// console.log(sumaRedondeada(10.6, 10))


// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual.
