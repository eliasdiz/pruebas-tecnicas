// ============ EJERCICIO # 1 =================
// function ejerc1(string){
//     let res = []
//     string = string.split(' ')
//     string.forEach(element => {
//         res.push(element[0])
//     });
//     return res.join('')
// }

// console.log(ejerc1('hola como estas'))
// console.log(ejerc1('compete online design event rating'))
// console.log(ejerc1(' c o d e r '))
// console.log(ejerc1(' '))


// ============ EJERCICIO # 2 =================

// function ejerc2(string){
//     // let res = []
//     let otro = string.split('').sort()
//     let letra;
//     for ( let i= 0; i < otro.length; i++ ){
//         if( otro[i] === otro[i+1]){
//             letra = otro[i]
//         }
//     }
//     return string.replaceAll(letra,'')
// }

// console.log(ejerc2('atencion'))
// console.log(ejerc2('contable'))
// console.log(ejerc2('casa'))


// ============ EJERCICIO # 3 =================

// function ejerc3(string,num){
//     string = string.trim().split(' ').sort((a,b) => a-b)
//     for ( let i = 0; i < string.length; i++){
//         if(num >= string[string.length-1]){
//             return -1
//         }
//         else if(num < string[0]){
//             return string[0]
//         }
//         else if(string[i] > num) {
//             return string[i]
//         }
//     }
    
// }

// console.log(ejerc3('1 2 3 4 5',2))
// console.log(ejerc3('120 450 780',1000))
// console.log(ejerc3(' 45 253 645 400 676 567 ',1))
// console.log(ejerc3(' 45 253 645 400 676 567 ',400))
// console.log(ejerc3('568 769 436 432 457 563 567 311 34 3 2 9',460))


// ============ EJERCICIO # 4 =================

// function ejerc4(){

// }

// console.log(ejerc4())

// ==============================================================================================

// function trineo(array){
//     for( let i = 0; i < array.length; i++){
//         if( array[0] < array[1] && array[1] > array[2]){
//             return true
//         }
//         else{ 
//             return false
//         }
//     }
// }

// console.log(trineo([0,3,2,1]))
// console.log(trineo([1,2,3,]))

// obejas = [
//     {nombre: 'hola', color: 'green'},
//     {nombre: 'Noah', color: 'blue'},
//     {nombre: 'hola', color: 'red'},
//     {nombre: 'aja', color: 'blue'},
//     {nombre: 'ahi jue', color: 'yellow'},
//     {nombre: 'hola', color: 'red'},
// ]

// function contObejas(array){
//     let res =  array.filter( i => i.color == 'red' || i.nombre.toLowerCase().includes('n','a'))
// }

// console.log(contObejas(obejas))
// contObejas(obejas)

// let tokens = ['D1','2B','A2','4C','1E','F10']
// console.log(tokens.sort()[tokens.length/2]) 


// function agregarMatrices(string){
//     let barra = string.indexOf('/')
//     let array1 = string.slice(0,barra).split(',')
//     let array2 = string.slice(barra+1,string.length).split(',')
//     let arrayNumeros1 = array1.map(i => Number(i))
//     let arrayNumeros2 = array2.map(i => Number(i))
//     let resul = arrayNumeros1.map((a,b) => {
//         return a + arrayNumeros2[b]
//     })

//     return resul

// }

// console.log(agregarMatrices('1,2,3/3,2,1'))

// var x = '2', y = '10'
// alert(x < y )

// console.log(Math.random(0,10))

// var i = 3

// function change(j){
//     j = 4
// } 

// change(i)
// console.log(i)