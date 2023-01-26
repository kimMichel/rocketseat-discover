/*
    # Variáveis
    * É um espaço para alocar dados na memória
    * Nomes simbólicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadas apra criar uma variável
        * var
        * let
        * const

*/

var clima = "Quente"
console.log(clima)
clima = "Frio"
console.log(clima)
console.log("---------------------------")

let tempo = "Ensoladarado"
console.log(tempo)
tempo = "Nublado"
console.log(tempo)
console.log("---------------------------")

const dia = "Claro"
console.log(dia)
// dia = "escuro"
// a variável do tipo const não pode ser sobrescrito
console.log("---------------------------")

/*
    O JS é uma linguagem fracamente tipada e dinâmica
    - Variáveis não precisam ter um tipo previamente definido
    - Podemos mudar o conteúdo da variável
*/

let variable //tipo: Any
console.log(variable)
console.log("---------------------------")

let varType = true
console.log(typeof varType)
varType = "String"
console.log(typeof varType)
console.log("---------------------------")

/*
    Scope
    * Escopo determina a visibilidade de alguma variável no JS

    # Block statement
    Vamos iniciar um bloco
    {
        aqui dentro é um bloco e posso colocar qualquer código
    }
    Aqui fechamos o bloco

    O bloco também criará um novo escopo. Chamamos de block-scoped.
*/

// var é global e também local

console.log("> existe x antes do bloco?", x)

/*
    O JS lê os códigos em cascata, porem graças a um conceito de hoisting, por baixo dos panos
    ele entende que a variável x existe, porém não foi denfinida ainda.
*/

{
    var x = 0
}

console.log("> existe x antes do bloco?", x)
console.log("---------------------------")

// const e let são locais e só funcionam no escopo onde foi criada!!

// console.log("> existe y antes do bloco?", y) não funciona

{
    let y = 0
    const z = 0
    console.log("> existe y antes do bloco?", y)
    console.log("> existe y antes do bloco?", z)
}

let y1 = 1
console.log("> existe y1 antes do bloco?", y1)

{
    y1 = 0
    console.log("> existe y1 antes do bloco?", y1)
}

// console.log("> existe y antes do bloco?", y) não funciona
console.log("---------------------------")

/*
    # Para criar nomes
    * JS é case-sensitive (maiusculas e minusculas fazem a diferença)
    * JS aceita a cadeia de caracteres Unicode
    
    - Posso:
        * Iniciar com esses caracteres especiais: $ _
        * Iniciar com letras
        * Colocar acentos
        * Letras maiusculas e minusculas fazem diferença
    - Não posso:
        * Iniciar com numeros
        * Colocar espaços vazios no nome
    - Ideal:
        * Criar nomes que fazem sentido
        * Que explique o que a variável é ou faz
        * camelCase
        * snake_case
        * Escrever em inglês
*/