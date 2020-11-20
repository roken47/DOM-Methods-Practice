const mainEl = document.createElement("main");
const imgEl = document.createElement("img");
const aEl = document.createElement("a");
const rmBtnEl_main = document.createElement("button");

document.body.appendChild(mainEl);
imgEl.src =
  "https://images.unsplash.com/photo-1495627009230-9e30e647c7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80";
imgEl.className = "image";
mainEl.appendChild(imgEl);
aEl.href =
  "https://images.unsplash.com/photo-1495627009230-9e30e647c7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80";
aEl.className = "link";
aEl.innerHTML = "link to image";
mainEl.appendChild(aEl);
rmBtnEl_main.innerHTML = "Remove Main Node";
document.body.appendChild(rmBtnEl_main);
rmBtnEl_main.addEventListener("click", function () {
  mainEl.remove();
});

//Stretch Goals:
// Remove by CSS Selector functionalities =>
const inputEl_css = document.createElement("input");
const rmBtnEl_css = document.createElement("button");
rmBtnEl_css.innerHTML = "Remove CSS Selector";
inputEl_css.placeholder = "Remove CSS Selector";
document.body.appendChild(inputEl_css);
document.body.appendChild(rmBtnEl_css);
rmBtnEl_css.addEventListener("click", function () {
  let inputCss = document.querySelectorAll(inputEl_css.value);
  inputCss.forEach(function (inputEl_css) {
    inputEl_css.remove();
  });
});
// add DIV element to BODY and contain user inputted text
const inputEl_text = document.createElement("input");
inputEl_text.placeholder = "Add Text to Page";
const addBtnEl_text = document.createElement("button");
addBtnEl_text.innerHTML = "Add Text";
document.body.appendChild(inputEl_text);
document.body.appendChild(addBtnEl_text);
addBtnEl_text.addEventListener("click", function () {
  const divEl = document.createElement("div");
  document.body.appendChild(divEl);
  divEl.innerHTML = inputEl_text.value;
});
/* 
Please comment on how I can make this more readable or even shorter. For example, Is "El" short for element to nearly all devs?
Also, I'd love your feedback on code structure. Lots of document.body calls. Can this be done shorthand? 
*/
