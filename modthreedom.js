//DOM Diagram

console.dir(window); //To Check properties

//getElementById('element')--------------------------------------------------
//Select the element or the group of element
//Decide the effect we want to apply to the selection

const val = document.getElementById("title");
val.style.color = "red";
//another way
document.getElementById("btn").style.color = "blue";

//getElemetbyTagName('tagname');---------------------------------------------
//return array like object
//index,length property only work
//Zero index based
//we can't access using forEach loop since it is a array like object, so we need
//spread operator(ES6)

const heading = document.getElementsByTagName("h2");
heading[0].style.color = "red";
console.log(heading.length);

const items = document.getElementsByTagName("li");
const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});

items[2].style.color = "orange";

//getElementByClassName('classname')-------------------------------------
//return node-list
//zero index based

const item = document.getElementsByClassName("special");
item[1].style.color = "blue";

//querySelector('Any css'): select single-----------------------------------
//querySelectorAll('any css'): select all-----------------------------------
//De facto selector method
//Merit: you can select any css
//Array based so we can use any advanced array function
//for class(.), for id(#)

const item = document.querySelector("#result");
item.style.color = "red";

const item2 = document.querySelector(".special");
console.log(item2);

const item3 = document.querySelector("li:last-child");
console.log(item3);

const item4 = document.querySelector(".special");
item4.forEach(function (iteminside) {
  console.log(iteminside);
  iteminside.style.color = "yellow";
});

//Navigate DOM Tree or Tranverse DOM Tree--------------------------------------------

//chidNodes - return all child notes including whitespace----------------------------
//children---------------------------------------------------------------------------
//firstChild-------------------------------------------------------------------------
//lastChild--------------------------------------------------------------------------

const item = document.querySelector("#result");
const allChildren = item.childNodes; //with whitespace
console.log(allChildren);

const children = item.children; //without whitespace
console.log(children);
console.log(children.firstChild);
console.log(children.lastChild);

//parentElement--------------------------------------------------------

const item = document.querySelector("h1");
const parent = item.parentElement;
parent.style.color = "red";

//previousSibling-------------------------------------------------------
//nextSibling-----------------------------------------------------------
//return whitespace, issue is resolved by calling twice
//if no sibling is available,it will return NULL

const firstValue = document.querySelector(".first");
const secondValue = (first.nextSibling.nextSibling.style.color = "red");
//for whitespace we need to call 2 times
console.log(second);

const lastValue = document.querySelector("#last");
const pre = last.previousSibling.previousSibling; //for whitespace we need to call 2 times
const prevLast = (pre.style.color = "yellow");
console.log(prevLast);

//previousElementSibling------------------------------------------------
//nextElementSibling-----------------------------------------------------
//whitespace is not an issue here

const item = document.querySelector(".second");
const nextElement = item.nextElementSibling;
nextElement.style.color = "red";

//nodeValue---------------------------------------------------------
//textContent-------------------------------------------------------
//property allow us to access TEXT content(both of them)

const item = document.getElementById("special");
const value = item.nodeValue; //wont get text here, need to access
const txtvalue = item.childNodes[0].nodeValue; //Either we can access like this
const txtvalue2 = item.firstChild.nodeValue; // or we can access like this

const value = item.textContent; //easier and better way to access text
console.log(value);

//getAttribute()--------------------------------------------------
//setAttribute() -------------------------------------------------

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
console.log("value");

const idValue = document.querySelector("id");
console.log(idValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute("class", "first"); //dynamically added class and text
last.textContent = "I also have a class of first";
console.log(last);

//className----------------------------------------------------
//classList----------------------------------------------------
//Add CSS Classes dynamically to our element

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const classValue = first.className;
console.log(classValue);

//Add classname to 'second'

second.className = "colors";
second.className = "text";

third.classList.add("colors", "text");
const classValue = third.classList;
console.log(classValue);

third.classList.remove("text");

let result = third.classList.contains("colors");
if (result) {
  console.log("Hello World");
} else {
  console.log("does not have class");
}

//createElement(element)-------------------------------------------------
//createTextNode(text Content)---------------------------------------------
//element.appendChild(childElement)----------------------------------------

{
  /* <style>
.red{background:red;color:white;}
.blue{background:blue;color:white;}
</style>
<body>
 <div id='result'>
  <h1 class='red'>I am the child</h1>
 </div>
</body> */
}

const result = document.querySelector("#result");

const bodyDiv = document.createElement("div");
const text = document.createTextNode("a simple div");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv); //added as alast element

const heading = document.createElement("h2");
const txtValue = document.createTextNode("dynamic ");
heading.appendChild(txtValue);
heading.classList.add("blue"); //blue in existing clas in html
result.appendChild(heading);
console.log(result.children);

//insertBefore(element,Location)----------------------------------------

const result = document.querySelector("#result");
const bodydiv = document.createElement("div");
const bodytxt = document.createTextNode("Hello");
document.body.insertBefore(bodydiv, result);

const heading = documement.createElemet("h2");
const txtValue = document.createTextNode("okay I have come");
result.appendChild(bodytxt); //mistake in code please cross check
heading.classList.add("blue");
result.insertBefore(heading, first);

//replaceChild(new,old)-------------------------------------------------

const smallHeading = document.createElemet("hiv");
const smallText = document.createTextNode("small text available");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
console.log(result.children);

//prepend():add in the front of the body--------------------------------------
//innerText property----------------------------------------------------------
//innertext let us set text right away, instead of creating textnode and appeding to the element

const heading = document.createElemet("h3");
heading.innerText = "i am a dynamic heading";
document.body.prepend(heading);

//remove()
//removeChild()

const result = document.querySelector("#result");
result.remove();

const heading = result.querySelector("#result");
result.removeChild(heading);

//innerHTML----------------------------------------------
//textContent--------------------------------------------
//innerHTML return the whole HTML structure within the called element

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = "random value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
document.body.appendChild(ul);

div.textContent = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`;
//this command will wont work, u need innerHTML to add.

//CSS-------------------------------------------------------

const item = document.querySelector(".random");

//style is defined in HTMl file with name title
//At a time multiple style property is added

item.classList.add("title");

//Event----------------------------------------------------------------

//Select Event
//addEventListener()
//what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");

btn.addEventListener("click", function () {
  heading.classList.add("blue");
});

//using Callback function as reference

const btn = document.querySelector(".btn");
const heading = document.querySelector("h1");

function change() {
  const cont = heading.classList.contains("red");
  if (cont) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", change); //dont invoke function here

//click: fires after full action occurs-------------------------------------
//mousedown: button is pressed
//mouseup  : better is released
//mouseenter  :moved onto an elemet
//mouseleave  :moved out of the element

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  console.log("clicked");
});

btn.addEventListener("mousedown", function () {
  console.log("mouse id down");
});

btn.addEventListener("mouseup", function () {
  console.log("mouse is up");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});

//keypress: when key is pressed
//keydown : when key is down
//keyup : when key is released
//<input type='text', id ='name'/>

const head = document.getElementById("name");

head.addEventListener("keypress", function () {
  console.log("key is pressed");
});

head.addEventListener("keydown", function () {
  console.log("key is down");
});

head.addEventListener("keyup", function () {
  console.log(head.value);
});

//event object argument e, evt--------------------------------------------------------
//info about triggered event
//event.type--------------------------------------------------------------------------
//event.currentTarget----------------------------------------------------------------
//this keyword: little consfusing at beginning
//preventDefault(): prevent default behaviour----------------------------------------
//this keyword and event does the same thing, although event has more property and all...

const btn = document.getElementsByClassName("btn");
const heading = document.getElementsByTagName("h1");
const link = document.getElementById("link");

btn.addEventListener("click", function (e) {
  e.currentTarget.classList.add("red");
  this.classList.add("red");
  //prefer event for now
  //if we use arrow function here 'this' keyword will not work.
});

heading.addEventListener("click", function (event) {
  //  heading.classList.add('blue');
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

function summary(e) {
  e.preventDefault();
}

link.addEventListener("click", summary);

//currentTarget: always refer to the event to which event handler is attached to.-----------------
//target : identifies the element on which to event occur-----------------------------------------
//for nested element in event target, only element identified on that the event occur
//for current target, event will occur to event handler it attached to.

const btn = document.querySelectorAll(".btn");

btn.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = "green";
    e.target.style.color = "green";
  });
});

//event propagation: orders the event are fired--------------------------------------------
//event bubbling(inner to root): clicked element first and then
//bubbles up:: default behaviour-----------------------------------------------------------
//event capturing(root to inner): fires at the root and fires until reaches target---------
//allows select dyanamic element

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("curret target", e.currentTarget);
  console.log("target", e.target);
}

container.addEventListener("click", showBubbling);
link.addEventListener("click", showBubbling);

//although no event has been defined still if we click the link, it will show 'log' in function, this is called bubbling and it is dafult behaviour in Javascript.

function stopPropogation(e) {
  console.log(`you clicked on li`);
  e.stopPropogation(); //this will prevent from bubbling
}

link.addEventListener("click", stopPropogation);

function showBubbling(e) {
  console.log(`current target`, e.currentTarget);
}

link.addEventListener("click", showBubbling, { capture: true }); //now bubbling from top to bottom

//allows select dynamic elements
//event propagation - order the events are fired
//evebt bubbling - clicked element first then bubbles up default

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
//const heading = document.querySelector(".heading");

function sayHello() {
  console.log("hello there");
}
btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent(`i am inside the container`);
  container.appendChild(element);
});

//since heading created dynamically we cannot target directly, so we need
//to target parent and through even bubble we select the heading.

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("hello there");
  }
});

//For dynamic changes we need to got to the main container file and access from here.
//heading.addEventListener("click", sayHello);

//submit event listener----------------------------------------
//prevent default()--------------------------------------------
//how to get a value-------------------------------------------

<body>
  <form action="" id="form">
    <input type="text" id="name" />
    <input type="password" id="password" />
    <input type="submit" value="submit" />
  </form>
</body>;

//action is a default behaviour so wont let addEventListener to act

const form = document.getElementById("form");
const nam = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted"); //it shows a go away because of 'action' attribute
  console.log(nam.value);
  console.log(password.value);
});

//after adding preventdafault(), now it works properly and prevent action from executing.
//won't refresh the page

//Web storage API - provided by browser---------------------------------------------------
//session storage, local storage-----------------------------------------------------------
//setItem('key','value'), getItem(''), removeItem(''), clear()
//localStorage keeps the date till browser is open
//sessionStorage keeps the data for that particular session.(if I open different TAB, it won't exist there)

//localStorage.setItem('name','John');

localStorage.setItem("name", "John");
const nam = localStorage.getItem("name");
console.log(nam);
localStorage.removeItem("name");
localStorage.clear();

//JSON.stringify(), JSON.parse()--------------------------------------------
//Solve array issue

const friends = ["john", "peter", "bob"];
localStorage.setItem("friend", JSON.stringify(friends));

const value = JSON.parse(localStorage.getItem("friends"));
console.log(value[0]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));

// setTimeout:run function once after specific time-------------------------------------
//pass function reference
// duration in millisecond(1sec= 1000millisecond)
//default 0, will cover more extensively in async/await section
//return unique identifier
//clearTimeout to cancel
//on window default

function hello() {
  console.log("hello World");
}
setTimeout(hello, 4000);

//alternative approach, arrow function
//pass argument

function fullname(firstName, lastName) {
  console.log(`my first name is ${firstName}, and last name is ${lastName}`);
}
setTimeout(fullname, 4000, "Hassan", "Qamar");

//unique identifier
//result: 1, 2, Danish Ali

const thirdID = setTimeout(fullname, 3000, "Aman", "Kumar");
const secondID = window.setTimeout(fullname, 7000, "Danish", "Ali");

console.log(thirdID);
console.log(secondID);

clearTimeout(thirdID);

//setInteval: runs function repeatedly, at specific intervals---------------------------------------
//pass function reference
//duration in ms(1sec = 1000ms)
//default 0
//return unique identifier
//clearInvterval to cancel

function showScore() {
  console.log("hello");
}
window.setInterval(showScore, 2000);

function fullName(fname, lname) {
  console.log(`First Name is: ${fname}, Last Name is: ${lname}`);
}
const firstAD = setInterval(fullname, 7000, "hassan", "qamar");
const secondAD = setInterval(fullname, 3000, "Rajesh", "Sharma");

clearTimeout(secondAD);

//The "DOMContentLoaded" event fires when initial HTML document has been ------------------------
//completely loaded and parsed, without waiting for stylesheets, -----------------------------
//images and sub frames to finish loading.----------------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".heading");
  console.log(header);
  header.style.color = "red";
});

//The 'load' event is fired when the whole page is laoded, including-----------------------------
//all dependent resources such as stylesheets and images. this is
//in contract to 'DOMContentLoaded' which is fried as soon the page DOM
//has been loaded, without waiting for resouces to finish loading.

//window.addEventListener('load', function(){
//your code here
//});

window.addEventListener("load", function () {
  console.log(`I am load event`);
  const header = document.querySelector(".heading");
  console.log(header);
  header.style.color = "red";
});

//Scroll event : on element or document-------------------------------------------------------
//scrollY: return no of pixels the document is currently scrolled
//along the vertical axis.scrollX: retur no of pixels the document
//is currently scrolledalong the horizontal axis.

window.addEventListener("scroll", function () {
  console.log(window.scrollX + "px");
  console.log(window.scrollY + "px");
});

//innerWidth : The read-only Window property the interior width
//of window in pixels.
//innerHeigth : the read-only property of the window interface
//returns the window height in pixels.
//The 'Element.getBoundingClientRect() method returns a DOMRect object
//providing information about the size of a element ans ots position
//relative to viewport.

console.log("Height", window.innerHeight);
console.log("Width", window.innerWidth);

const btnValue = document.querySelector(".btn");
const boxValue = document.querySelector(".box");

btnValue.addEventListener("click", function () {
  const valueI = box.getBoundingClientRect();
  console.log(valueI);
});

//The resize event fires when the document view(window)-----------------------------
//has been resized.

window.addEventListener("resize", function () {
  console.log(this.window.innerHeight);
});
