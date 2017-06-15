// start with 7 characters

//edit char ter text

$(document).ready(function() {

// Global variables for moving

	var clickedOn; 
	var clickedOnFight;

//global variables for fighting functions

	var mainCharHp = 150;
	var mainCharStrength = 15;

	var badCharHp;
	var badCharStrength;

	var wins;

//Barcharacter HPs 
var badCharacters = [
		{
		charname: "borg",
	 	HP: 150,
	 	strength: 15,
		src: "assets/images/enemies/borg.jpg"},
		{
		charname: "ferengi",
		HP: 125,
		strength: 5,
		src: "assets/images/enemies/Ferengi.jpg"},
		{
		charname: "gul",
		HP: 175,
		strength: 25,
		src: "assets/images/enemies/gul.jpg"},
		{
		charname: "Qq",
		HP: 250,
		strength: 50,
		src: "assets/images/enemies/Qq.jpg"}
		,{
		charname: "dominion",
		HP: 200,
		strength: 40,
		src: "assets/images/enemies/the dominion.jpg"},
		{
		charname: "romulans",
		HP: 150,
		strength: 30,
		src: "assets/images/enemies/romulans.jpg"}
	]
// click on character to choose a character
// When you click on a character, the other characters disapear and the enemies appear

	$('.characters').on('click', function() {
		clickedOn = $(this).attr("src");
		mainCharacter();
		console.log(clickedOn);
		return enemies();
		});

//clicking on an enemy moves them to defender area '.badCharacters'

	$('.badGuysContainer').on('click', '.badCharacters', function() {
		clickedOnFight = $(this).attr("src");
		enemyMove();
		console.log(clickedOnFight);
	});



// main character

function mainCharacter() {
	$(".imgCharacterContainer").html("<img class='characters' src='" + clickedOn + "' id='player'/>");
}

//enemies appear

function enemies() {
	$(".badGuysContainer").html("<img class='badCharacters' src= 'assets/images/enemies/borg.jpg' id='borg'/> <img class='badCharacters' src= 'assets/images/enemies/Ferengi.jpg' id='ferengi'/> <img class='badCharacters' src= 'assets/images/enemies/gul.jpg' id='gul'/> <img class='badCharacters' src= 'assets/images/enemies/Qq.jpg' id='Qq'/> <img class='badCharacters' src= 'assets/images/enemies/the dominion.jpg' id='dominion'/> <img class='badCharacters' src= 'assets/images/enemies/romulans.jpg' id='romulans'/>");
}


//moved to defender area

function enemyMove() {
	$(".badGuysImg").html("<img class='badCharacters' src='" + clickedOnFight + "' id='fighting'/>")
	updateCharHp();
}

//click on character in defender area to fight them

function enemyClickFight() {
	$(".clickAttack").click( function() {
	fight();
	die();
	win();
	}
)};

//update bad char with correct hp

function updateCharHp() {
	for(i = 0; i < badCharacters.length; i++) {
		if (clickedOnFight == badCharacters[i].src) {
		badCharHp = badCharacters[i].HP;
		badCharStrength = badCharacters[i].strength;}
		console.log(badCharHp)
	}
}
//when you click on the char to fight them, ++ the main fight power and subtract strength from Hp.

	function fight() {
		mainCharHp = mainCharHp - badCharStrength;
		mainCharStrength = mainCharStrength + 5;
		badCharHp = badCharHp - mainCharStrength;
	}

// if hp = zero for main char, you die

function die(){
 if (mainCharHp == 0)
 	alert("Oh no! You died!");

 	// Global variables for moving

	var clickedOn; 
	var clickedOnFight;

	//global variables for fighting functions

	var mainCharHp = 150;
	var mainCharStrength = 15;

	var badCharHp;
	var badCharStrength;
	//also reset HP
}

//if you defeat 3 bad guys, you win!

function win() {
	for( i=0; i <= wins; i++) {
		if (badCharHp == 0) {
		wins++;
		} else if (wins == 3) {
		alert("You Win!");
		}

	} 
}

});
