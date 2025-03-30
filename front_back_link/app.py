from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# 初始化数据库
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS todos
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  content TEXT NOT NULL,
                  created_at TIMESTAMP NOT NULL,
                  completed BOOLEAN NOT NULL DEFAULT 0)''')
    conn.commit()
    conn.close()

# 首页路由
@app.route('/')
def index():
    return render_template('index.html')

# 获取所有待办事项
@app.route('/api/todos', methods=['GET'])
def get_todos():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('SELECT * FROM todos ORDER BY created_at DESC')
    todos = [{'id': row[0], 'content': row[1], 'created_at': row[2], 'completed': bool(row[3])} 
             for row in c.fetchall()]
    conn.close()
    return jsonify(todos)

# 添加新待办事项
@app.route('/api/todos', methods=['POST'])
def add_todo():
    content = request.json.get('content')
    if not content:
        return jsonify({'error': '内容不能为空'}), 400
    
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('INSERT INTO todos (content, created_at) VALUES (?, ?)',
              (content, datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    conn.commit()
    todo_id = c.lastrowid
    conn.close()
    
    return jsonify({'id': todo_id, 'message': '添加成功'})

# 更新待办事项状态
@app.route('/api/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    completed = request.json.get('completed', False)
    
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('UPDATE todos SET completed = ? WHERE id = ?', (completed, todo_id))
    conn.commit()
    conn.close()
    
    return jsonify({'message': '更新成功'})

if __name__ == '__main__':
    init_db()
    app.run(debug=True) 