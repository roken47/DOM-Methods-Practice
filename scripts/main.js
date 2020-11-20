const main = document.createElement("main");
const image = document.createElement("img");
const anchor = document.createElement("a");
const removeMainButton = document.createElement("button");
const body = document.body;

body.appendChild(main);
image.src =
  "https://images.unsplash.com/photo-1495627009230-9e30e647c7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80";
image.className = "image";
main.appendChild(image);
anchor.href =
  "https://images.unsplash.com/photo-1495627009230-9e30e647c7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80";
anchor.className = "link";
anchor.innerHTML = "link to image";
main.appendChild(anchor);
removeMainButton.innerHTML = "Remove Main Node";
body.appendChild(removeMainButton);
removeMainButton.addEventListener("click", function () {
  main.remove();
});

//Stretch Goals:
// Remove by CSS Selector functionalities =>
const userInputSelector = document.createElement("input");
const removeSelectorButton = document.createElement("button");
removeSelectorButton.innerHTML = "Remove CSS Selector";
userInputSelector.placeholder = "Remove CSS Selector";
body.appendChild(userInputSelector);
body.appendChild(removeSelectorButton);
removeSelectorButton.addEventListener("click", function () {
  let selectorArray = document.querySelectorAll(userInputSelector.value);
  selectorArray.forEach(function (userInputSelector) {
    userInputSelector.remove();
  });
});
// add DIV element to BODY and contain user inputted text
const userInputText = document.createElement("input");
userInputText.placeholder = "Add Text to Page";
const addTextButton = document.createElement("button");
addTextButton.innerHTML = "Add Text";
body.appendChild(userInputText);
body.appendChild(addTextButton);
addTextButton.addEventListener("click", function () {
  const div = document.createElement("div");
  body.appendChild(div);
  div.innerHTML = userInputText.value;
});
/* 
Please comment on how I can make this more readable or even shorter. For example, Is "El" short for element to nearly all devs?
Also, I'd love your feedback on code structure. Lots of document.body calls. Can this be done shorthand? 
*/
