"use strict";

// Add functionality for updating count of number of remixes
// document.querySelector("#remix").addEventListener("click", function(e) {
//   // increment the remix counter
//   // create a new remixer object with the following properties and push it onto a remixers array
//   // userAgentString 
//   // ipAddress
// });

let projectName = location.host.substring(0, location.host.indexOf("."));
      
let editSolutionsUrl = "https://glitch.com/edit/#!/"+ projectName + "?path=solutions.js"; 
      
document.getElementById("solutions-edit-link").href = editSolutionsUrl;