console.log( 'metodo split, seprando por , ');
var string = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
var string = string.split(",");
console.log(string);
console.log('-------');

console.log( 'metodo split, separando por " " ');
var sentence = "A quick brown fox jumps over the lazy dog";
var words = sentence.split(" ");
console.log(words);
console.log('-------');

console.log( 'metodo split, separando por - ');
var phoneNumber = "123-456-7890";
var digits = phoneNumber.split("-");
console.log(digits);
console.log('-------');

console.log( 'metodo split, separando por , ');
var emailList = "user1@example.com, user2@example.com, user3@example.com";
var emails = emailList.split(", ");
console.log(emails);

