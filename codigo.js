// API FATOS CACHORROS
// https://dog-api.kinduff.com/api/facts (NÃO FUNCIONA)
// so comentei pra fazer o repositorio :)

var teste = 0
votar()

var votoTotal = 0
var votoGato = 0
var votoCachorro = 0

var dogFacts = ["Their sense of smell is at least 40x better than ours.",
    "Some have such good noses they can sniff out medical problems.",
    "Dogs can sniff at the same time as breathing.",
    "Your dog could be left or right-pawed.",
    "Along with their noses, their hearing is super sensitive.",
    "Dogs have 18 muscles controlling their ears.",
    "Dogs are about as intelligent as a two-year-old.",
    "Petting a dog can lower your blood pressure.",
    "A dog's average body temperature is 38.5ºC.",
    "Dogs nose prints are as unique as a humans finger prints, and can be used to accurately identify them.",
    "Dalmatians are completely white at birth.",
    "Female wolves have been known to travel great distances to regurgitate full meals for their hungry pups.",
    "In Croatia, scientists discovered that lampposts were falling down because a chemical in the urine of male dogs was rotting the metal.",
    "Dogs can be taught to count and solve simple math problems.",
    "Dogs sometimes appear to smile -- much like humans -- with open mouth grinning. This may indicate a relaxed, submissive state.",
    "Humans can detect sounds at 20,000 times per second, while dogs can sense frequencies of 30,000 times per second.",
    "Dogs are mentioned in the Bible more than 35 times.",
    "Dogs see in colors of various shades of blue and yellow.",
    "In 2001, it was estimated that there are approximately 400 million dogs in the world.",
    "Dogs have no sense of time."]

async function votar(botao) {
    if (votoTotal == 19 || votoGato == 10 || votoCachorro == 10) {
        teste = teste + 1

        if (teste <= 3) {
            alert("Aperte f5 ou recarregue a página para jogar novamente!")
        } else if (teste <= 4) {
            alert("... Ow amigão, recarrega isso aí pô, já falei já.")
        } else if (teste <= 5) {
            alert("Tá, deixa que eu faço.")
            window.location.reload(true)
        }
    }

    if (teste == 0) {
        // FOTO GATO
        var fotoGato = document.getElementById("fotoGato")

        var endpointFotoGato = "https://api.thecatapi.com/v1/images/search"

        var response = await fetch(endpointFotoGato)
        var bodyJson = await response.json()

        var imagemGato = bodyJson[0].url

        fotoGato.src = imagemGato

        // FOTO CACHORRO
        var fotoCachorro = document.getElementById("fotoCachorro")

        var endpointFotoCachorro = "https://dog.ceo/api/breeds/image/random"

        var responseC = await fetch(endpointFotoCachorro)
        var bodyJsonC = await responseC.json()

        var imagemCachorro = bodyJsonC.message

        fotoCachorro.src = imagemCachorro

        // FATO GATO
        var fatoGato = document.getElementById("fatoGato")

        var endpointFatoGato = "https://catfact.ninja/fact?max_length=95"

        var responseFG = await fetch(endpointFatoGato)
        var bodyJsonFG = await responseFG.json()

        fatoGato.innerText = bodyJsonFG.fact

        // FATO CACHORRO
        // var fatoCachorro = document.getElementById("fatoCachorro")

        // var endpointFatoCachorro = "https://dog-api.kinduff.com/api/facts"

        // var responseFC = await fetch(endpointFatoCachorro)
        // var bodyJsonFC = await responseFC.json()

        // fatoCachorro.innerText = bodyJsonFC[0].facts

        if (botao === 1) {
            votoGato = votoGato + 1
            votoTotal = votoTotal + 1
        } else if (botao === 2) {
            votoCachorro = votoCachorro + 1
            votoTotal = votoTotal + 1
        }

        // FATO CACHORRO 2.0
        var fatoCachorro = document.getElementById("fatoCachorro")
        fatoCachorro.innerText = dogFacts[votoTotal]

        var pontuacaoGato = document.getElementById("pontuacaoGato")
        pontuacaoGato.innerText = votoGato

        var pontuacaoCachorro = document.getElementById("pontuacaoCachorro")
        pontuacaoCachorro.innerText = votoCachorro

        var aside = document.getElementById("aside")

        if (votoCachorro == 10) {
            var h2 = document.createElement("h2")
            h2.innerText = "VOCÊ É UM DOGPERSON!"
            h2.classList.add("animalPerson")

            aside.append(h2)
        } else if (votoGato == 10) {
            var h2 = document.createElement("h2")
            h2.innerText = "VOCÊ É UM CATPERSON!"
            h2.classList.add("animalPerson")

            aside.append(h2)
        }
    }
}