/*
for (i = 9; i > -1 ; i-- ){
    console.log(i);
}
*/
/*
let favouriteDrinks = ["Orange", "Absinthe", "Coffee"];
console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);
*/
/*
let favouriteFilms = ["The Departed", "Pulp Fiction", "Grand Budapest Hotel", "Chef", "Interstellar"];
favouriteFilms.push("LOTR", "Inglorious Bastards")
console.log(favouriteFilms);
for(filmIndex = 0; filmIndex < favouriteFilms.length ; filmIndex++) {
    console.log(favouriteFilms[filmIndex]);
    }
*/
/*
let favouriteFilm = ["The Departed", "Pulp Fiction", "Grand Budapest Hotel", "Chef", "Interstellar", "LOTR", "Inglorious Bastards"]
let otherfilm = ["Shrek"]
if (favouriteFilm [1] == otherfilm) {
    console.log("it's shrek");
}
else {
    console.log("oh no it's not shrek");
}
*/
let number = 50;
let currentNumber = 0;
while(currentNumber != number){
    console.log(currentNumber);
    currentNumber = (Math.floor(Math.random()*51));
   }
   console.log(currentNumber);
