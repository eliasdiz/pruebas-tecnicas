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

function ejerc4(){

}

console.log(ejerc4())