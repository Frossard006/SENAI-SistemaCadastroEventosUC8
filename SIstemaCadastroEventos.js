const prompt = require('prompt-sync')({sigint: true});

const date = new Date

let diaEvento = prompt("digite o dia do evento: ")
while(diaEvento <= date.getDate()){
    console.log("Data inválida")
    diaEvento = prompt("Insira uma nova data: ")
}

let adicionarParticipante = "s"
let participantes = []
let palestrantes = ["Matheus", "Breno", "Wilfred", "Otávio"]
while(adicionarParticipante == "s"){
    let idadeParticipante = prompt("digite a idade do participante: ")
    while(idadeParticipante < 18){
        console.log("Idade inválida")
        idadeParticipante = prompt("Insira uma nova idade: ")
}

    let nomeParticipante = prompt("Digite o nome do participante: ")
    participantes.push(nomeParticipante)

    console.log(`\tPARTICIPANTES (${participantes.length})`)
    console.log("------------------------------")
    for(let i = 0; i < participantes.length; i++){
        console.log(participantes[i])
    }
    console.log("------------------------------\n")

    console.log(`\tPALESTRANTES (${palestrantes.length})`)
    console.log("------------------------------")
    for(let i = 0; i < palestrantes.length; i++){
        console.log(palestrantes[i])
    }
    console.log("------------------------------\n")

    if(participantes.length >= 100){
        console.log("Número máximo de participantes atingido.")
        return
    }else{
        adicionarParticipante = prompt("Deseja adicionar mais algum participante? [s/n]: ")
    }
}

console.log("Cadastro realizado com sucesso!");