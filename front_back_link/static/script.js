// 获取所有待办事项
async function fetchTodos() {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    displayTodos(todos);
}

// 显示待办事项列表
function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" 
                   ${todo.completed ? 'checked' : ''} 
                   onchange="toggleTodo(${todo.id}, this.checked)">
            <span>${todo.content}</span>
        `;
        
        todoList.appendChild(li);
    });
}

// 添加新待办事项
async function addTodo() {
    const input = document.getElementById('newTodo');
    const content = input.value.trim();
    
    if (!content) return;
    
    const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });
    
    if (response.ok) {
        input.value = '';
        fetchTodos();
    }
}

// 切换待办事项状态
async function toggleTodo(id, completed) {
    const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed })
    });
    
    if (response.ok) {
        fetchTodos();
    }
}

// 页面加载时获取待办事项
document.addEventListener('DOMContentLoaded', fetchTodos); 