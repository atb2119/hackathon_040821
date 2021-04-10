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


//message listener - listens for message from popup.js
chrome.runtime.onMessage.addListener(payload => {
  //if we get something passed in
  if (payload) {
    //did we get it?
    console.log(payload);
    //lowercase everything inside of payload and push to a new arr
    let payloadArr = [];
    payload.forEach(word => {payloadArr.push(word.toLowerCase())});
    
    //below was originally in global scope, we want to run this upon reciept of message
    //iterate through all of the 'result-row' elements
    for (let i = 0; i < allResults.length; i++){
      //grab the text out of each and lowercase it
      let compareStr = allResults[i].innerText.toLowerCase();
      //iterate through the payload arr and compare each using the includes method
      for (let j = 0; j < payloadArr.length; j++){
        if (compareStr.includes(payloadArr[j])){
        allResults[i].style.display += "none";
        }
      }
    }
  }
});


//Features:
//track/display number of filtered items
//user input to specify key words

//changelog
//4/9 3:25 pm - in manifest file (cannot comment in that file)- added icon, changed name to "no bs"
//added some check boxes (for commonly BS keywords)
//added some basic CSS to popup.html
//manifest file - added content security policy to allow us to pass script to popup.html
//manifest file - added tabs permissions - see "messaging" - to pass info from extension popup to main script
//good tutorial https://itnext.io/all-youll-ever-need-to-know-about-chrome-extensions-ceede9c28836
//popup.js - everything inside the event listener (so it wont trigger until you input something)
//added message sender/listener - to send code from popup.js to main.js
//changed keyword vairable (payload) to an array that will hold whatever is passed in+ checkboxes
