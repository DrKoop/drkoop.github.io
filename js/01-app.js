const producto = "Monitor 20 pulgadas\" "
const producto2 = String('Monitor de 24 pulgadas')
/* Creando una cadena, como tipo Objeto */
const producto3 = new String("Monitor de 27 pulgadas")
const precio = '10 usd'

console.log(producto2);
console.log(producto3);


    console.log(producto);

    /* Metodos*/
    /* Conocer la cantidad de letras de la cadena de Texto */
    console.log(producto.length) //21
    /* En que posicion se encuentra */
    console.log(producto.indexOf('pulgadas'))
    /* En que posicion se encuentra, si existe (devuelve un booleano) */
    console.log(producto.includes('pulgadas')) //true
    console.log(producto.includes('Pulgadas')) //false


        /* Concatenar dos variables */
        console.log(producto.concat(precio))
        console.log(producto.concat('En Precio especial'))
        console.log( producto + "Con un Precio de: " +  precio )
        /* Con template-S */
        console.log(`El producto ${producto} tiene un costo de: $ ${precio}`)


/* -------------------------------------------------------------------------- */
/*                ELIMINAR ESPACIOS EN BLANCO                                 */
/* -------------------------------------------------------------------------- */

const producto4 = "          M o n  i t o r  d e  28    pulgadas           "
console.log(producto4.length)
/* Elimina espacios desde el inicio */
console.log(producto4.trimStart())
/* Elimina espacios desde el final */
console.log(producto4.trimEnd())
console.log(producto4.trimStart().trimEnd())
/* Mismo Resultado */
console.log(producto4.trim())

/* -------------------------------------------------------------------------- */
/*                            STRING  METHODS                                 */
/* -------------------------------------------------------------------------- */

const producto_5 = 'Monitor de 26 pulgadas'
/* Reemplazar */
console.log(producto_5)
console.log(producto_5.replace('Monitor', 'Television'))
/* Corta ( DESDE EL INICIO) */
console.log(producto_5.slice(0,10))
/* Alternativa */
console.log(producto_5.substring(0,2))
/* Diferencia entre slice y substring, substring corta de igual manera, no importa el orden que se le indique */
console.log(producto_5.substring(2,0))
/* Corta un solo caracter */
console.log(producto_5.charAt(0)) //M
/* Repetir una cadena de texto */
const Promo = 'En Promocion hasta el '.repeat(2.3) //Redondea a 2 veces
console.log(Promo)
/* Dividir un String */
console.log(Promo.split(" ")) //Devuelve un arreglo, separado por espacios
const semana = 'lunes,martes , miercoles,jueves, viernes, sabado,domingo'
console.table(semana.split(","))
/* MAYUSCULAS */
console.log(producto_5.toUpperCase())
/* minusculas */
console.log(producto_5.toLocaleLowerCase())
/* Convertir un numero a string */
const number = 300;
console.log(number)
console.log(number.toString())
