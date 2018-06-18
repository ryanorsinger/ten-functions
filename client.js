"use strict";

// Add functionality for updating count of number of remixes
// document.querySelector("#remix").addEventListener("click", function(e) {
//   // increment the remix counter
//   // create a new remixer object with the following properties and push it onto a remixers array
//   // userAgentString 
//   // ipAddress
// });

// projectName and projectEditLink
let projectName = location.host.substring(0, location.host.indexOf("."));
let editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=solutions.js";       
document.getElementById("solutions-edit-link").href = editSolutionsUrl;

// Add tracker to count number of remixes/forks of the project
document.querySelector("#remix").addEventListener('click', function(event) {
  console.log("remix button clicked");
  // wire up to send a request to a firebase or local endpoint that tracks number of clicks and userAgents
});