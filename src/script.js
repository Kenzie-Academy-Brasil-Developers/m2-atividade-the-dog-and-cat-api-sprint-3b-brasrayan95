const getCat = document.querySelector(".getCat")
const frameGato = document.querySelector(".cat_photo")

function pegarGatinho(){
    return fetch("https://api.thecatapi.com/v1/images/search")
}

getCat.addEventListener("click", el => {
    el.preventDefault();
    checaGatinho();
})

async function checaGatinho(){
    const pegaGato = await pegarGatinho();
    const gato = await pegaGato.json();
    const fotoGato = document.createElement("img")
    fotoGato.src = `${gato[0].url}`
    frameGato.innerHTML = ""
    frameGato.append(fotoGato)
}

//CÃO

const getDog = document.querySelector(".getDog")
const frameDog = document.querySelector(".dog_photo")

function pegarDoguinho(){
    return fetch("https://api.thedogapi.com/v1/images/search")
}

getDog.addEventListener("click", el => {
    el.preventDefault();
    checaDoguinho();
})

async function checaDoguinho(){
    const pegaDog = await pegarDoguinho();
    const cao = await pegaDog.json();
    const fotoDog = document.createElement("img")
    fotoDog.src = `${cao[0].url}`
    frameDog.innerHTML = ""
    frameDog.append(fotoDog)
}




