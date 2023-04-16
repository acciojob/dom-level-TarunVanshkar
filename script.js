//your JS code here. If required.
let currentLevel = document.getElementById("level");    // let or var works here because we will update its value. const wont work

let level=0;
// loop through the parent elements of the target element
while(currentLevel.parentNode != document)
{
    level++;     // Increase the level
    currentLevel = currentLevel.parentNode;     // Update current code level
}

alert("The level of the element is: "+level);