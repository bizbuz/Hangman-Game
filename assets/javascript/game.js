



var lordofRingsCharacters = ["Gandalf", "Aaragon", "Frodo", "Samwise",
	 "Legolas", "Gimli", "Boromir","Sauron", "Gollum", "Nazgul", "Saruman" ];


var score = 7;
var maximumGuess = 7;  
var char = ""; 
var Hangman_game = {
	

	pickCharacter: function() {
		// randomly pick a string froM var LordofRings 
		var selectedCharacter = lordofRingsCharacters[Math.floor(Math.random()*lordofRingsCharacters.length)];
		return selectedCharacter ; 

	},

	displayPlaceholder: function(selectedCharacter){
		//Display as many placeholders as number of alphabets in character
		var number = selectedCharacter.length; 
		var section = document.getElementById("Placeholder");

		for ( var i=0; i < number; i ++ ){

			var tb = document.createElement("input");
			tb.type = "text";
			tb.id = "tb" + i; 
			section.appendChild(tb);
		};

	},

	isNewAlphabet: function(char, selectedCharacter){
		//check if the alphabet is already printed in either section.
		//if yes, do nothing or play sound
			var number = selectedCharacter.length
			for (var j =0 ; j < number; j ++){
				if (document.getElementById("tb"+[j]).value === char){
					return  false; 
				}
			}

			for (var k = 1 ; k < maximumGuess; k++){
				if (document.getElementById("incorrecttb" + [k]).value === char){
					return false
				}
			}

			return true; 

		},
	

	isAlphabetMatch: function(char, selectedCharacter){
		//check  if the character pressed exists in the string 
		//if yes, capture index of char present in string
		//place the char in  that text box 
		if (selectedCharacter.indexOf(char) != -1){
			return selectedCharacter.indexOf(char); 

		}
	
		else return -1; 

	},
	
};

//Global Function Press Any key to get staed 
/*function startHere( pressKey){
};*/


//get Character 
var selectedCharacter = Hangman_game.pickCharacter();
console.log(selectedCharacter);
Hangman_game.displayPlaceholder(selectedCharacter);
Hangman_game.updateScore();
document.onkeyup = function(e){
				char = e.key
				var isNewAlphabet = Hangman_game.isNewAlphabet(char, selectedCharacter ); 
				if (isNewAlphabet){
					var place = Hangman_game.isAlphabetMatch(char, selectedCharacter); 
					if (char != "" && place != -1){
						document.getElementById("tb" + [place]).value = char; 
					}
				else {
					var i = score;
					document.getElementById("incorrecttb"+i).value = char; 
					score = score-1; 
					document.getElementById("score").value = score; 
					}; 
				};
			}

		
