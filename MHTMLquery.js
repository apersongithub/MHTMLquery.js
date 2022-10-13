/* mhtmlquery.js - a person#25664 */
/* MIT License */

//Basic Variables

var log = console.log;
var ede = "Element inputted doesn't exist."

//JS setCookie
function setCookie(name, value, samesitelsn) {
document.cookie = name + '=' + value; + " " + "SameSite=" + samesitelsn + " " + 'Secure'
log(name, value, samesitelsn)
};

//*SELECTING ELEMENTS BY ID*//

//change an element's ID by selector name.
function changeIDselector(selector, id) {
if (document.querySelector(selector)) {
    document.querySelector(selector).id = id;
    log(id)
} else {
  error(ede)
}};

//change an element's ID by class name.
function changeIDclass(classname, id) {
if (document.getElementsByClassName(classname)[0]) {
    document.getElementsByClassName(classname)[0].id = id;
    log(id)
} else {
  error(ede)
}};

//change an element's ID by tag name.
function changeIDtagname(tagname, id) {
if (document.getElementsByTagName(tagname)[0]) {
    document.getElementsByTagName(tagname)[0].id = id;
    log(id)
} else {
  error(ede)
}};

//change an element's ID by name.
function changeIDname(name, id) {
if (document.getElementsByName(name)[0]) {
    document.getElementsByName(name)[0].id = id;
    log(id)
} else {
  error(ede)
}};

//*SELECTING ELEMENTS BY ID*//

//ERROR MESSAGE//
function error(message) {
    console.log("%c❌ Uncaught SyntaxError: " + message , "background: #240300; color: #ea8881; border-width: 2px; border-color: #510e01; border-bottom: 2px solid #510e01; border-top: 2px solid #510e01;");
}

