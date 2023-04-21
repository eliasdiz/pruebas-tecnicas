// function quadrant(x, y) {
//     if( x > 0 && y > 0){
//         return 1
//     }
//     else if( x <= 0 && y > 0 ) {
//         return 2
//     }
//     else if ( x < 0 && y < 0){
//         return 3
//     }
//     else if ( x > 0 && y < 0 ){
//         return 4
//     }


// }

// console.log(quadrant(1, 2))
// console.log(quadrant(3,5))
// console.log(quadrant(-10,100))
// console.log(quadrant(-1,-9))
// console.log(quadrant(19,-56))

// function multipleOfIndex(array){
//     let res = []
//     for( let i = 1; i < array.length; i++){
//         if( array[i] % i == 0){
//             res.push(array[i])
//         }
//     }
//     return res

// }

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) //[-6, 32, 25]

// function factorial(n){
//     let res = 1
//     for(let i = 1; i <= n; i++ ){
//         res *= i
//     }
//     return res
// }

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(7))
// console.log(factorial(17))

// function expressionMatter(a, b, c) {
//     let array = []
//     array.push(a+b+c,a*b*c,a+b*c,a*b+c,(a+b)*c,a*(b+c))
//     return Math.max(...array)
    
// }

// console.log(expressionMatter(2, 1, 2)) // 6
// console.log(expressionMatter(2, 1, 1)) // 4
// console.log(expressionMatter(1, 1, 1)) // 3
// console.log(expressionMatter(1, 2, 3)) // 9


function distinct(a) {
    return [ ...new Set(a)]
}

console.log(distinct([1,1,2]))