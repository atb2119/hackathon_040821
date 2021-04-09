//CHROME EXTENSION

//Goal: Parse results on craigslist car search, hide obviously fake results (i.e. "we buy" etc)

/*
Assumption: Run this on the page once results are already loaded
make manifest file
Step 1 - Make our fetch request
Step 2 - Identify container or containers that results are stored in
Step 3 - Define criteria between legitimate result vs fake one
Step 4 - Identify the fake results based on above criteria
Step 5 - Hide the fake results (use css display property?)

possibile additional functionality:
-let user provide keywords to filter
*/

//Declare a variable, assign the dom content
let allResults = document.getElementsByClassName("result-row"); //gets all result-row
//define a variable that stores search criteria (i.e. - string "we buy")
let fakeKeywords = [];
//Once we have variable, iterate through the content/nodes, searching for the criteria
for (let i = 0; i < allResults.length; i++){
  //Once we have matched critera to content, hide that content
  if (allResults[i].innerText.includes(fakeKeywords)){
    allResults[i].style.display += "none";
  }
}

//declare onclick function to grab text from input and pass to keywords array/string

//Features:
//track/display number of filtered items
//user input to specify key words


