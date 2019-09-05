/*
let favouriteSong = [
    "Toto - Africa",
    "Smash Mouth - All Star",
    "Toto - Africa"
];
favouriteSong[3] = "The Jurrassic Park Soundtrack"
favouriteSong.push 
favouriteSong.pop ();
console.log(favouriteSong)
*/
/*
let favouritewebsites = [
    "reddit",
    "youtube",
    "paleonet"
];
    console.log(favouritewebsites)
favouritewebsites [3] = "Google"
console.log(favouritewebsites)
favouritewebsites [4] = "wikipedia"
console.log(favouritewebsites)
favouritewebsites.pop();
console.log(favouritewebsites)
*/
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']
var shifted = myFish.shift(); 
console.log('myFish after:', myFish); 
// myFish after: ['clown', 'mandarin', 'surgeon']
console.log('Removed this element:', shifted); 
// Removed this element: angel