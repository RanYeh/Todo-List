// Initial varibles
let list = document.querySelector('#my-todo')
let done = document.querySelector('#done-list')
let addBtn = document.querySelector('#add-btn')
let input = document.querySelector('#new-todo')

// Initial Data
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(list ,todo)
}

// Add todo
addBtn.addEventListener('click', () => {
  addItem(list ,input.value)
  input.value = ''
})

// Enter and check input
input.addEventListener('keyup', (event) => {
  // Avoid entering \s in the begining
  input.value = input.value.replace(/^\s*/g,'')
  // Press Enter to add todo
  if (event.key === 'Enter') {
    addItem(list ,input.value)
    input.value = ''
  }
})

// Delete and done
list.addEventListener('click', event => {
  const target = event.target

  if (target.classList.contains('delete')) {
    // 垃圾桶 >> 刪除 todo
    target.parentElement.remove()
  } else if (target.tagName === "LABEL") {
    // todo 完成 >> Done list
    target.classList.toggle("checked")
    addItem(done ,target.outerHTML)
    target.parentElement.remove()
  }
})
done.addEventListener('click', event => {
  const target = event.target
  if (target.classList.contains('delete')) {
    target.parentElement.remove()
  }
})

// Functions
function addItem (node ,text) {
  text.trim()
  if (text.length > 0) {
    let newItem = document.createElement("li")
    newItem.innerHTML = `
      <label for="todo">${text}</label>
      <i class="delete fa fa-trash"></i>
    `
    newItem.style.cursor = 'pointer'
    
    node.appendChild(newItem)
  }
}