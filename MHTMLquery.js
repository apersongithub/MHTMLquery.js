/* mhtmlquery.js - a person#25664 */
/* MIT License */

var log = console.log

//JS set Cookie
function setCookie(name, value, samesitelsn) {
  document.cookie = name + '=' + value; + " " + "SameSite=" + samesitelsn + " " + 'Secure'
  log(name, value, samesitelsn)
  };

function setCookie(name, value) {
  document.cookie = name + '=' + value;
};

//change an element's ID by selector name.
function changeIDselector(selector, id) {
if (document.querySelector(element)) {
    document.querySelector(element).id = id;
    log(id)
} else {
  error("Element doesn't exist")
}};

//change an element's ID by class name.
function changeIDclass(classname, id) {
if (document.getElementsByClassName(classname)) {
    document.getElementsByClassName(classname).id = id;
    log(id)
} else {
  error("Element doesn't exist")
}};

//change an element's ID by tag name.
function changeIDtagname(tagname, id) {
if (document.getElementsByTagName(tagname)) {
    document.getElementsByTagName(tagname).id = id;
    log(id)
} else {
  error("Element doesn't exist")
}};

//change an element's ID by name.
function changeIDname(name, id) {
if (document.getElementsByName(name)) {
    document.getElementsByName(name).id = id;
    log(id)
} else {
  error("Element doesn't exist")
}};

//ERROR MESSAGE//
function error(message) {
    console.log("%c❌ Uncaught SyntaxError: " + message , "background: #240300; color: #ea8881; border-width: 2px; border-color: #510e01; border-bottom: 2px solid #510e01; border-top: 2px solid #510e01;");
}

