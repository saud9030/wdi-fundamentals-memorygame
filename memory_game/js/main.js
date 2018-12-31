


var cards = ['Queen','Queen','King','King'];
var cardsInPlay = [];
var card01 = cards[0];
cardsInPlay.push(card01);
console.log("User flipped " + card01);
var card02 = cards[2];
cardsInPlay.push(card02);
console.log("User flipped " + card02);

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!!");
	}
	else
	{
		alert("Sorry, try again");
	}
}
