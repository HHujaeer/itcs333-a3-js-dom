// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here

let counter = 0;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}


function start() {
  const todoList = document.getElementById("todo-list");
  const todoForm = document.getElementById("todo-form");
  const counterEl = document.getElementById("counter");
  todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputEl = document.getElementById("todo-input");
    const task = inputEl.value;
    inputEl.value = "";
    if (task != "") {
      counter++;
      counterEl.textContent = `${counter} items left`;
    }
  })
}
