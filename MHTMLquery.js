/* mhtmlquery.js - a person#25664 */
/* MIT License */

//getElementById
function getid(element, id) {
var a = document.getElementById(element);
if (a) {
    element.id = id;
} else {
  error("Element doesn't exist")
}};

//Error Message//
function error(message) {
    console.log("%c❌ Uncaught SyntaxError: " + message , "background: #240300; color: #ea8881; border-width: 2px; border-color: #510e01; border-bottom: 2px solid #510e01; border-top: 2px solid #510e01;");
}

