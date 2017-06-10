// start with 7 characters

$(document).ready(function() {

	var clickedOn = '';


	$('.characters').on('click', function() {
		clickedOn = $(this).attr("src");
		mainCharacter();

		});

// click on character to choose a character

// When you click on a character, the other character disapear and the enemies appear

function mainCharacter() {
	$(".imgCharacterContainer").html("<img class='characters' src='" + clickedOn + "' id='character1'/>");
}

function enemies() {
	$(".badGuysCharacter").html
}
//clicking on an enemy moves them to defender area

//once in the defender area, you are able to fight the enemy character. 

//Every time you fight(click), your attack power goes up. 

//Goal is to fight all till you win.  

// Global variables


});
