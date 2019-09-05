var myBird = ['sparrow', 'buzzard', 'magpie', 'kestrel'];
console.log('myBird before:', JSON.stringify(myBird));
// myBird before: ['sparrow', 'buzzard', 'magpie', 'kestrel']
var shifted = myBird.shift(); 
console.log('myBird after:', myBird); 
// myBird after: ['buzzard', 'magpie', 'kestrel']
console.log('Removed this element:', shifted); 
// Removed this element: sparrow