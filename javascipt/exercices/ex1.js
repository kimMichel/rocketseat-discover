/*
    1. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (Integer)
        * stars: Number (Float)
        * isSubscribed: Boolean
    
    2. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
    3. Reatribua valor para a variável acima, colocando dentro dela o objeto student.
    4. Coloque no console o valor da posição zero do Array acima.
    5. Crie um novo student e coloque na posição 1 do Array student
*/

// 1. Declare uma variável de nome weight

let student = {
    name: "Kim",
    age: 24,
    stars: 5.0,
    isSubscribed: true
}

const students = []
students[0] = student

student = {
    name: "Dri",
    age: 22,
    stars: 10.0,
    isSubscribed: false
}

students[1] = student

console.log(students)
