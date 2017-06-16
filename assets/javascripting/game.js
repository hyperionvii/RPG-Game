// start with 7 characters

//edit char ter text

$(document).ready(function() {

// Global variables for moving

	var clickedOn; 
	var clickedOnFight;
	var clickedOnId;
	var clickedOnIdBad;

//global variables for fighting functions

	var mainCharhp = 150;
	var mainCharStrength = 15;

	var badCharHp;
	var badCharStrength;

	var wins;

//Barcharacter HPs 
var badCharacters = [
		{ borg: 
			{
			id: "borg",
		 	HP: 150,
		 	strength: 15,
			src: "assets/images/enemies/borg.jpg"
			},
		 ferengi:
			{
			id: "ferengi",
			HP: 125,
			strength: 5,
			src: "assets/images/enemies/Ferengi.jpg"
			},
		 gul:
			{
			id: "gul",
			HP: 175,
			strength: 25,
			src: "assets/images/enemies/gul.jpg"
			},
		 qq:
			{
			id: "Qq",
			HP: 250,
			strength: 50,
			src: "assets/images/enemies/Qq.jpg"
			},
		 dominion:
			{
			id: "dominion",
			HP: 200,
			strength: 40,
			src: "assets/images/enemies/the dominion.jpg"
			},
		 romulans:
			{
			id: "romulans",
			HP: 150,
			strength: 30,
			src: "assets/images/enemies/romulans.jpg"
			}
	}
	]
// click on character to choose a character
// When you click on a character, the other characters disapear and the enemies appear

	$('.imgCharacterContainer').on('click', '.characters', function() {
		clickedOn = $(this).attr("src");
		clickedOnId = $(this).attr("id");
		mainCharacter();
		mainCharHp();
		// console.log(clickedOn);
		// console.log(clickedOnId);
		return enemies();
		});

//clicking on an enemy moves them to defender area '.badCharacters'

	$('.badGuysContainer').on('click', '.badCharacters', function() {
		clickedOnFight = $(this).attr("src");
		clickedOnIdBad = $(this).attr("id");
		enemyMove();
		enemyHpUpdate();
		// updateCharHp();
		console.log(clickedOnFight);
		console.log(clickedOnIdBad)
	});



// main character

function mainCharacter() {
	$(".secondContainer").html("<img class='characters' src='" + clickedOn + "' id= '" + clickedOnId + "'>");
}

//update main character HP

function mainCharHp() {
	$(".characterInfo").html("<h2> Your HP is: " + mainCharhp + "</h2>");
}

//enemies appear

function enemies() {
	$(".badGuysContainer").html("<img class='badCharacters' src= 'assets/images/enemies/borg.jpg' id='borg'/> <img class='badCharacters' src= 'assets/images/enemies/Ferengi.jpg' id='ferengi'/> <img class='badCharacters' src= 'assets/images/enemies/gul.jpg' id='gul'/> <img class='badCharacters' src= 'assets/images/enemies/Qq.jpg' id='Qq'/> <img class='badCharacters' src= 'assets/images/enemies/the dominion.jpg' id='dominion'/> <img class='badCharacters' src= 'assets/images/enemies/romulans.jpg' id='romulans'/>");
}


//moved to defender area

function enemyMove() {
	$(".badGuysImg").html("<img class='badCharacters' src='" + clickedOnFight + "' id='fighting'/>")
}

//update enemyHP when first moved

function enemyHpUpdate() {
	enemyHP = badCharacters.clickedOnIdBad.HP
	$(".badGuyHp").html("<h2>" + enemyHP + "</h2>")
}

//click on character in defender area to fight them

function enemyClickFight() {
	$(".clickAttack").click( function() {
	fight();
	// die();
	// win();
	}
)};

//update bad char with correct hp

function updateCharHp() {
	for(i = 0; i < badCharacters.length; i++) {
		if (clickedOnFight == badCharacters[i].src) {
		badCharhp = badCharacters[i].HP;
		badCharStrength = badCharacters[i].strength;}
		console.log(badCharHp)
	}
}
//when you click on the char to fight them, ++ the main fight power and subtract strength from Hp.

	function fight() {
		mainCharhp = mainCharhp - badCharStrength;
		mainCharStrength = mainCharStrength + 5;
		badCharHp = badCharHp - mainCharStrength;
	}

// if hp = zero for main char, you die

// function die(){
//  if (mainCharHp == 0)
//  	alert("Oh no! You died!");

//  	// Global variables for moving

// 	var clickedOn; 
// 	var clickedOnFight;

// 	//global variables for fighting functions

// 	var mainCharHp = 150;
// 	var mainCharStrength = 15;

// 	var badCharHp;
// 	var badCharStrength;
// 	//also reset HP
// }

//if you defeat 3 bad guys, you win!

// function win() {
// 	for( i=0; i <= wins; i++) {
// 		if (badCharHp == 0) {
// 		wins++;
// 		} else if (wins == 3) {
// 		alert("You Win!");
// 		}

// 	} 
// }

});