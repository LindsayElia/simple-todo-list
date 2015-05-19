// gets the body element and sets it to be the variable 'body'
var body = document.getElementsByTagName("body")[0]; 
var userInput = document.getElementById("entry");
var submitButton = document.getElementById("add_todo");
var answersArr = [];
var count = 0;
var unorderedList = document.createElement("ul");
body.appendChild(unorderedList);


// push inputs into a new array and then show them in new <div>s
// will need to listen for input keys? or take the entire inner.HTML, need to get the value of the innerHTML...look for this thing

// make a counter to increment the [i] for answersArr to only place the current entry as the inner.HTML
// var counter = function(){
//	 var count = count + 1;
//	 return count;
// }

// add the user's input as HTML in a new div on the page
var createNewListItem = function(){
	var listItem = document.createElement("li");
	unorderedList.appendChild(listItem);
	listItem.innerHTML = answersArr[count];
}

// this eventListener is not necessary but it's nice to see it being logged in the console
// I started with this to see which property of userInput I needed to get the user's input
userInput.addEventListener("click", function(){
	console.dir(userInput);
	console.log(userInput.value);
})

submitButton.addEventListener("click", function(e){
	e.preventDefault();			// clear the default behavior of the 'submit' button,
								// which refreshes the page completely and erases everything
	console.dir(submitButton);	
	answersArr.push(userInput.value);	// add the user's input into the (empty) array I initialized above
	console.log(count);					
	createNewListItem();				// call the function (above) that creates the new list item
	count = count + 1;					// make a counter so we can use it as the number to get the index of the array
	console.log(count);
	
	// need to reset the input field to show the placeholder text
	// turning off preventDefault will allow this, but then it looks like my console.dir does not get run
	// userInput.placeholder("what do you need to do?");
	// e.stopPropogation();
	
})
