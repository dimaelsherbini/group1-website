var getUserName = prompt("hello! who are you? plase state your name: ");

console.log(getUserName);

document.getElementById("name").innerText = getUserName;

/* tooltip js */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })