// theGame = {
// 	heroCharacter: {life: 15}, //hero charcter
// 	mapsLocation: {left: 0, up: 0}, //mapLocation

//  	zombies: {   	 // zombies object
// 		zombie1: { // first zombie
// 		life: 10, 
// 		fight: fight1,
// 		encounter: zombieEncounter1,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		}, 

// 		zombie2: { //second zombie
// 		life: 10,
// 		fight: fight1,
// 		encounter: zombieEncounter2,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		},

// 		zombie3: { // third zombie
// 		life: 10,
// 		fight: fight1,
// 		encounter: zombieEncounter3,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		},

// 		zombie4: { // fourth zombie
// 		life: 10,
// 		fight: fight1,
// 		encounter: zombieEncounter4,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		},

// 		zombie5: { // fifth zombie
// 		life: 10,
// 		fight: fight1,
// 		encounter: zombieEncounter5,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		},

// 		zombie6: { //zombie 6
// 		life: 10,
// 		fight: fight1,
// 		encounter: zombieEncounter6,
// 		lifeCheck: isItDead,
// 		heroCheck: areYouDead,
// 		encounterChoice: reaction
// 		}
// 	}
// }
function zombieEncounter6() {
	console.log ("holy shit balls")
}
function zombieEncounter5() {
	console.log ("holy shit balls")
}
function zombieEncounter4() {
	console.log ("holy shit balls")
}
function zombieEncounter3() {
	console.log ("holy shit balls")
}
function zombieEncounter2() {
	console.log ("holy shit balls")
}
function zombieEncounter1() {
	console.log ("holy shit balls")
}


var data = [
{xCoordinate: 0, yCoordinate: 2, thisLocation: zombieEncounter4}, //encounter4
{xCoordinate: 1, yCoordinate: 0, thisLocation: zombieEncounter1}, // encounter1
{xCoordinate: 1, yCoordinate: 3, thisLocation: zombieEncounter6}, //encounter6
{xCoordinate: 2, yCoordinate: 2, thisLocation: zombieEncounter5},	//encounter5
{xCoordinate: 2, yCoordinate: 3, thisLocation: zombieEncounter3}, //encounter3
{xCoordinate: 4, yCoordinate: 0, thisLocation: zombieEncounter2}, //encounter2
]


data.map(function(datum, array) {
	 if (datum.thisLocation){
	 console.log(datum.thisLocation,"occurs at x:", datum.xCoordinate, "y:", datum.yCoordinate)
	 return datum.thisLocation
	}
})


data.forEach(function(datum) {
	if (datum.thisLocation) {
		return datum.thisLocation()
	}
	else if ((datum.xCoordinate >= 5) || (datum.yCoordinate >= 5))  {
		console.log("Thank you for playing")
		console.log(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
		alert("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
		console.log("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
		alert(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
	}

	else {
		console.log("Looks like there isn't anything here. Better keep moving.")
		alert("Looks like there isn't anything here. Better keep moving.")
		locationChoice();
	}
})







var eventData = [
{xCoordinate: 0, yCoordinate: 2, thisLocation: zombieEncounter4}, //encounter4
{xCoordinate: 1, yCoordinate: 0, thisLocation: zombieEncounter1}, // encounter1
{xCoordinate: 1, yCoordinate: 3, thisLocation: zombieEncounter6}, //encounter6
{xCoordinate: 2, yCoordinate: 2, thisLocation: zombieEncounter5},	//encounter5
{xCoordinate: 2, yCoordinate: 3, thisLocation: zombieEncounter3}, //encounter3
{xCoordinate: 4, yCoordinate: 0, thisLocation: zombieEncounter2}, //encounter2
]

function encounterMap () {
	eventData.forEach(function(datum) {
		if (datum.thisLocation) {
			return datum.thisLocation()
		}
		else if ((datum.xCoordinate >= 5) || (datum.yCoordinate >= 5))  {
			console.log("Thank you for playing")
			console.log(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
			alert("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
			console.log("Up ahead you see a building that's been walled off. People, walk the roofline. Real people! This could be your chance!")
			alert(firstName + " " + lastName + " - you have successfully survived with " + heroCharacter.life + " health points.");
		}

		else {
			console.log("Looks like there isn't anything here. Better keep moving.")
			alert("Looks like there isn't anything here. Better keep moving.")
			locationChoice();
		}
	})
}







