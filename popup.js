//const button = document.getElementById('submitButton');
//const textBox = document.getElementById('textBox');
document.addEventListener('DOMContentLoaded', clicker);


//experimental function for checking text boxes and check boxes
function clicker() {
  //grab the button and then do everything inside of this func
  document.getElementById('submitButton').addEventListener('click',
  function () {
    //create payload to hold everything thats going to be passed
    let payload = [];
    //check if each individual checkbox is checked, if so, grab its value
    let boxes = document.getElementsByClassName('box');
    //iterate through htmlcollectionobject
    for(let i = 0; i < boxes.length; i++){
      if (boxes[i].checked == true){
        payload.push(boxes[i].value)
      }
    }
    //check the text field
    let textBox = document.getElementById('textBox');
    //if there's anything in it, push it to the payload
    if (textBox.value) payload.push(textBox.value);
    //send it
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, payload)
  })
})
}


//ok, we're about to try some crazy stuff - chrome extension messaging

// function sendPayload(payload) {
//   console.log(payload);
//     //send information to the current tab, pass in input.value (this is being called in the clicker function)...
//     //so we are passing the textbox into this function
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, payload)
//   })
// }

//need to set up a listener in the main file






//the below two funcs works for input box
// function clicker() {
//   document.getElementById('submitButton').addEventListener('click', 
//   function() {textGrab(document.getElementById('textBox'))
//   })
// }

// function textGrab(input) {
//   //send information to the current tab, pass in input.value (this is being called in the clicker function)...
//   //so we are passing the textbox into this function
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, input.value)
// })
// }

// //experimental function for checking text boxes and check boxes
// function clicker() {
//   //create payload to hold everything thats going to be passed
//   let payload = [];
//   //check if each individual checkbox is checked, if so, grab its value
//   let boxes = document.getElementsByClassName('box');
//   //iterate through htmlcollectionobject
//   for(let i = 0; i < boxes.length; i++){
//     if (boxes[i].checked == true){
//       payload.push(boxes[i].value)
//     }
//   }
//   //check the text field
//   let textBox = document.getElementById('textBox');
//   //if there's anything in it, push it to the payload
//   if (textBox.value) payload.push(textBox.value);
//   //grab the button and add ev listener, 
//   document.getElementById('submitButton').addEventListener('click',
//   //callback func to send payload
//   function() {
//     sendPayload(payload)}
//   )
// }