/*console.log("Estoy en DOM");
let serie_1 = document.getElementById("serie_1");

serie_1.innerHTML = "ESTO ES UNA CAJA SERIE DESDE JS"
serie_1.style.background = "red"
serie_1.style.color = "white"



console.log(serie_1);

let serie_2;
serie_2 = document.getElementsByClassName("card");

let color = ["red","blue","white","orange"]

for(let i=0; i < serie_2.length;i++){
    console.log(serie_2[i])
    serie_2[i].style.background = color[i];
    serie_2[i].style.color = "white";
}
*/

let titulo = document.querySelector(".card .card-title");
titulo.innerHTML = "serie 11"


console.warn(all_cards)
console.warn(all_cards.card-title)

let series = {
                serie_1: {name: "Serie 1", description: "Descripción"},
                serie_2: {name: "Serie 2", description:  "Descripción"}
            }
console.log(series.serie_1);
let all_cards = document.querySelectorAll(".card")

//
for(let i=0; i < all_cards; i++){
    let card = all_cards[i]
    console.log(card.querySelector(".card-title"))

    let card_title = card.querySelector(".card-title")
    let card_text = card.querySelector(".card-text")
    //
    if (series("serie_"+i) !== undefined){
        card_title.innerHTML = series ["Serie_"+i].name
        card_text.innerHTML = series["serie_"+i].description
    }
}