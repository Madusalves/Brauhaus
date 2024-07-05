const rightArrow = document.getElementById("right-arrow-btn")
const leftArrow = document.getElementById("left-arrow-btn")

const beer1 = {
    file: 'file (1)',
    name: "NEUSCHWANSTEINER HELLES",
    part1: "Neuschwansteiner Helles is a classic Bavarian-style Helles lager, brewed with the finest ingredients and traditional methods in the shadow of Neuschwanstein Castle, one of Germany's most iconic landmarks.",
    part2: "This refreshing and easy-drinking lager is characterized by its golden straw color, delicate malt sweetness."
}
const beer2 = {
    file: 'file (2)',
    name: "KROMBACHER",
    part1: "Krombacher is a popular German Pilsner beer known for its crisp, refreshing taste and adherence to the Reinheitsgebot, or German Purity Law",
    part2: ""
}
const beer3 = {
    file: 'file (3)',
    name: "HERRENHÄUSER",
    part1: "Herrenhäuser is a liqueur brand owned by the German company Berentzen Group. The brand is best known for its Herrenhäuser Kräuterlikör, a herbal liqueur made with 43 different herbs and spices.",
    part2: "It is one of the most popular liqueurs in Germany and is also enjoyed in many other countries around the world."
}

let beerArray = [beer1, beer2, beer3]
let index = 0

function prevBeer(){
    if(index === 0){
        index = beerArray.length - 1
    }
    else{
        index -= 1
    }
    indexManager()
}


function nextBeer(){
    if(index === beerArray.length - 1){
        index = 0
    }
    else{
        index += 1
    }
    indexManager()
}

function indexManager(){
    document.getElementById("product-image").src = `img/${beerArray[index].file}.png`
    document.getElementById("product-title").innerHTML = beerArray[index].name
    document.getElementById("part-1").innerHTML = beerArray[index].part1
    document.getElementById("part-2").innerHTML = beerArray[index].part2
}

indexManager()

rightArrow.addEventListener("click", nextBeer)
leftArrow.addEventListener("click", prevBeer)