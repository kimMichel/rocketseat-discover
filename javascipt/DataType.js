/*
    String
    * Cadeia de caracteres

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings        
*/

console.log("Kim")
console.log(`Kim tem ${12 + 12} anos.`)
console.log("---------------------------")

/*
    Number
    * números

    33 // inteiros (positivo ou negativo)
    12.5 // reais
    NaN // Not a number
    Infinity // infinito
*/

console.log(12.5 + 12)
console.log(12.5 / "asd")
console.log("---------------------------")

/*
    Boolean
    * somente dois valores

    true // verdadeiro
    false // falso
*/

console.log(1 + 1 == 3)
console.log(1 + 1 == 2)
console.log("---------------------------")

/*
    Undefined
    * indefinido

    Null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido
*/

console.log(null)
console.log(undefined)
console.log(null === undefined)
console.log("---------------------------")

/*
    Object
    * objeto
    * Propriedades / Atributos
    * Funcionalidades / Metodos
    
    { propriedade: "valor" }

*/

console.log({
    name: "Kim",
    idade: 24,
    andar: function(){
        console.log("andar")
    }
})
console.log("---------------------------")

/*
    Array (Vetores)
    * uma lsita
    * agrupamento de dados
    
    ["kim", 26, 10, 1998]
*/

console.log([
    "Leite",
    "Ovos",
    "Farinha",
    2,
    3
])
console.log("---------------------------")

/*
    # Tipos de dados
    Conforme o ECMAScript standard temos 9 tipos de dados:

    * Data types
        - primitive / primitive value
        - structural
        - structural primitive
    
    ## Primitive
    * String
    * Number
    * Boolean
    * undefined
    * Symbol
    * BigInt
    
    ## Structural
    * Object
        * Array
        * Map
        * Set
        * Date
        * ...
    * Function
    
    ## Structural primitive / Structure Root Primitive
    * null
*/