// homework is: create your own unique set of objects and arrays, 
// with nested objects and arrays, and give me 10 unique examples 
// for each of these: reduce, map, and forEach
// make sure you flex some muscle and feel comfortable. 
// LOTS of crazy interface work next week, 
// so you need to feel good about moving around arrays and 
// objects using these functions


// Example 1 - reduce - "adding" object properties to make a list
var simpleData = [{name: "John"},{name: "Bill"},{name: "Sarah"},{name: "Heather"}]

simpleData.reduce(function(indexZero, indexOne) {
	
	console.log(indexZero.name + " " + indexOne.name);
	return{name: indexZero.name + " " + indexOne.name};
})

// Example 2 - reduce - selective list making
var lessSimpleData = [{name: "John", age: 30, hobby: "kites"},{name: "Bill", age: 19, hobby: "ninjitsu"},
{name: "Sarah", age: 24, hobby: "dance"},{name: "Heather", age: 40, hobby: "hackery"}]

lessSimpleData.reduce(function(indexZero, indexOne) {
		
		console.log("Everyone has a hobby. Our group here today likes:", indexZero.hobby + ", " + indexOne.hobby)
		return {hobby: indexZero.hobby + ", " + indexOne.hobby}
	
	
})


function adding(array) {
	array.reduce(function(x, y) {
		console.log(x+y);
		return x+y;
	})
}

// Example 3 - array of arrays into one object with associated 
// keynames and keyvalues based on array. Can be used with multi-indexed arrays
// however, they must be even for the object to work

var nameArray = [
	["NameOne", "Marco", "SiblingOne", "Mary"],
	["NameTwo", "Steve", "SiblingTwo", "Susan"],
	["NameThree", "Thomas", "SiblingThree", "Beth"],
	["NameFour", "Kristen", "SiblingFour", "Peppe"],
	["NameFive", "Tiffany", "SiblingFive", "Peter"],
	["NameSix", "Marta", "SiblingSix", "Adam"]
];

var nameArrayObject = nameArray.reduce(function(keyname, keyValue) {
	keyname[keyValue[0]] = keyValue[1];
	keyname[keyValue[2]] = keyValue[3];
    return keyname;
}, {});


console.log(nameArrayObject);

// Example 4 - altering the info provided by an existing array of objects
// into a new array


var jamesBond = [
    { films: 7,  actor: "Sean Connery",      	 begin: 1962, end: 1983 },
    { films: 1,  actor: "George Lazenby",    	 begin: 1969, end: 1969 },
    { films: 7,  actor: "Roger Moore",           begin: 1973, end: 1985 },
    { films: 2,  actor: "Timothy Dalton",        begin: 1986, end: 1994 },
    { films: 4,  actor: "Pierce Brosnan",        begin: 1994, end: 2004 },
    { films: 3,  actor: "Daniel Craig",          begin: 2005, end: 2014 },
];


jamesBond = jamesBond.reduce(function(setOne, bond) {
    if (bond.films > 1) { //removes the Lazenby
        setOne.push({ //pushes a new object onto the end of the array with the follow properties
            playedBy: bond.actor,
            yearsPlayed: bond.end - bond.begin,
            numberOfFilms: bond.films
        });
    }
    return setOne;
}, []); // set an inital value of [] to push into an empty array
 
console.log(jamesBond);


// Example 5 - 









// Example 11 - forEach squares each number

var numberOne = [1,2,3,4]
numberOne = numberOne.forEach(function(number) {
	number = number*number;
	console.log(number)
})


// Example 12 forEach - if statement to filter for object content

var infoArray = [{info: "target1", response: "noooo you found me!"}, {info: "target2", response: "haha, failed"}, {info: "target3", response: "not even close"}]

var infoArray = infoArray.forEach(function(data){
	if (data.info == "target1"){
		console.log(data.response);
	}
})



// Example 21 - .map
























