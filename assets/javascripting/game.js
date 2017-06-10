// start with 7 characters

//edit char ter text

$(document).ready(function() {

// Global variables

	var clickedOn = ''; 
	var clickedOnFight = '';

// click on character to choose a character
// When you click on a character, the other characters disapear and the enemies appear

	$('.characters').on('click', function() {
		clickedOn = $(this).attr("src");
		mainCharacter();
		return enemies();

		});

//clicking on an enemy moves them to defender area

	$('.badGuysContainer').on('click', '.badCharacters', function() {
		clickedOnFight = $(this).attr("src");
		enemyMove();
		console.log("Am I working?")
	});



// main character

function mainCharacter() {
	$(".imgCharacterContainer").html("<img class='characters' src='" + clickedOn + "' id='player'/>");
}

//enemies appear

function enemies() {
	$(".badGuysContainer").html("<img class='badCharacters' src= 'assets/images/enemies/borg.jpg' id='badCharacter1'/> <img class='badCharacters' src= 'assets/images/enemies/borgwoman.jpg' id='badCharacter2'/> <img class='badCharacters' src= 'assets/images/enemies/Ferengi.jpg' id='badCharacter3'/> <img class='badCharacters' src= 'assets/images/enemies/gul.jpg' id='badCharacter4'/> <img class='badCharacters' src= 'assets/images/enemies/Qq.jpg' id='badCharacter5'/> <img class='badCharacters' src= 'assets/images/enemies/the dominion.jpg' id='badCharacter6'/> <img class='badCharacters' src= 'assets/images/enemies/romulans.jpg' id='badCharacter7'/>");
}


//moved to defender area

function enemyMove() {
	$(".badGuysImg").html("<img class='badCharacters' src='" + clickedOnFight + "' id='fighting'/>")
	$(".badGuysContainer").remove("<img class='badCharacters' src='" + clickedOnFight + "' id='fighting'/>");
}

//once in the defender area, you are able to fight the enemy character. 

//Every time you fight(click), your attack power goes up. 

//Goal is to fight all till you win.  



});
