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
  const errorEl = document.getElementById("error-msg");
  const allBtn = document.getElementById("filter-all");
  const activeBtn = document.getElementById("filter-active");
  const doneBtn = document.getElementById("filter-done");

  todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputEl = document.getElementById("todo-input");
    const task = inputEl.value;
    inputEl.value = "";
    if (task != "") {
      errorEl.classList.add("hidden");
      counter++;
      counterEl.textContent = `${counter} items left`;
      const taskEl = document.createElement("li");
      taskEl.innerHTML = `<span class="item-text">${task}</span>`
      const buttonEl = document.createElement("button");
      buttonEl.textContent = "Delete"
      buttonEl.classList.add("delete-btn")
      taskEl.appendChild(buttonEl)
      todoList.append(taskEl)
    } else {
      errorEl.classList.remove("hidden");
    }
  })

  todoList.addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() == "li") {
      e.target.classList.toggle("completed");
    } else if (e.target.classList.contains("item-text")) {
      e.target.parentNode.classList.toggle("completed");
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.parentNode.remove();
      counter--;
      counterEl.textContent = `${counter} items left`;
    }
  })

  allBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => el.classList.remove("hidden"))
  })

  activeBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => {
      if (el.classList.contains("completed")) {
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
      }
    });
  });

  doneBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => {
      if (el.classList.contains("completed")) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    })
  })

}
