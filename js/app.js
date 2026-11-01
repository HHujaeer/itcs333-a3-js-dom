// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here

(function() {
  const counterEl = document.getElementById("counter");
  const todoList = document.getElementById("todo-list");
  const todoForm = document.getElementById("todo-form");
  const errorEl = document.getElementById("error-msg");
  const allBtn = document.getElementById("filter-all");
  const activeBtn = document.getElementById("filter-active");
  const doneBtn = document.getElementById("filter-done");

  function updateCounter() {
    const activeCount = [...todoList.children].filter((el) => !el.classList.contains("completed")).length;
    counterEl.textContent = `${activeCount} items left`;
  }

  todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputEl = document.getElementById("todo-input");
    const task = inputEl.value.trim();
    inputEl.value = "";
    if (task != "") {
      errorEl.classList.add("hidden");
      const taskEl = document.createElement("li");
      taskEl.innerHTML = `<span class="item-text">${task}</span>`
      const buttonEl = document.createElement("button");
      buttonEl.textContent = "Delete"
      buttonEl.classList.add("delete-btn")
      taskEl.appendChild(buttonEl)
      todoList.append(taskEl)
      updateCounter()
    } else {
      errorEl.classList.remove("hidden");
    }
  })

  todoList.addEventListener("click", function(e) {
    if (e.target.classList.contains("item-text")) {
      if (e.target.parentNode.classList.contains("completed")) {
        e.target.parentNode.classList.remove("completed");
      } else {
        e.target.parentNode.classList.add("completed");
      }
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.parentNode.remove();
    }
    updateCounter()
  })

  allBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => el.style.removeProperty("display"))
  })

  activeBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => {
      if (!el.classList.contains("completed")) {
        el.style.removeProperty("display");
      } else {
        el.style.display = "none";
      }
    });
  });

  doneBtn.addEventListener("click", function() {
    todoList.childNodes.forEach((el) => {
      if (el.classList.contains("completed")) {
        el.style.removeProperty("display");
      } else {
        el.style.display = "none";
      }
    })
  })
})();
