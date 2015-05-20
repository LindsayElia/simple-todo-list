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
	var listItem = document.createElement("li");	// create a LI
	unorderedList.appendChild(listItem);			// add LI to UL
	listItem.innerHTML = answersArr[count];			// put the text from the user's input into the LI
	listItem.style.className = "classListItem";
	listItem.setAttribute = ("data-count", count);		// add a data attribute to the LI so we can delete it later, and set the 
														// value of the data attribute to be the same as the current counter
	
	var deleteSpan = document.createElement("span");	// create a SPAN
	listItem.appendChild(deleteSpan);				// add SPAN to LI
	deleteSpan.className = "deleteMe"				// add a className to the SPAN
	deleteSpan.innerHTML = "Delete";				// put the text 'Delete' into the LI
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
	userInput.value = "";
	
	// need to reset the input field to show the placeholder text
	// turning off preventDefault will allow this, but then it looks like my console.dir does not get run
	// userInput.placeholder("what do you need to do?");
	// e.stopPropogation();
	
})

// Mark the list items as completed by changhing the className of each LI to match the CSS for a completed LI
unorderedList.addEventListener("click", function(e){
	console.log("UL listener"); 	// this is for us to see what happens when we click anywhere in the UL
	if (e.srcElement.className){			// this will run only when LIs have been given a className
		e.srcElement.className = "";		// reset the className to be empty
	} else {
		e.srcElement.className = "completed";	// if there is NO className already on the LI, or the target element of the
		// unorderedList or UL, then we want to assign a className of 'completed'. This will run first for all LI that 
		// have not been clicked on previously
	}
})


// trying to delete list items...not yet working!
/*
unorderedList.addEventListener("click", function(e, createNewListItem){
	if (e.srcElement.className = "deleteMe"){
		// e.stopPropagation();
		// document.removeChild(this);
		for (var j = 0; j < unorderedList.length; j++){
			unorderedList.removeChild(this);
		}
	//	var itemToDelete = document.getElementsByTagName("li");
	//	this.removeChild(itemToDelete);
	}
}, false) // false = bubble up, which is default; true = capture downward, the opposite of bubble up
*/
