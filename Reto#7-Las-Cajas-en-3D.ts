/* Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:  */

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/

/* Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ". */


function drawGift(size: number, symbol: string){
    if (size === 1) return `#\n`

    const filas: string[] =[]

    filas[0] = `#`.repeat(size).padStart(size * 2 - 1)
    filas[size * 2 - 2] = `#`.repeat(size)
    filas[size - 1] =`${"#".repeat(size)}${symbol.repeat(size - 2)}#`
    
    for (let fila = 1; fila < size - 1; fila++){
        let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`

        filas[fila] = draft.padStart(size * 2 - 1, ` `)
        filas[size * 2 - 2 - fila] = draft
    }

    return filas.join(`\n`).concat(`\n`)
}
