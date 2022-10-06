import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    body: "",
  });

  const { title, body, id } = inputs;

  const onChange = (e) => {
    // 감지된 input의 value값과 name값을 구조분해할당으로 아래와 같은 이름의 변수로 지정
    const { value, name } = e.target;

    setInputs({
      ...inputs, // 값을 수정할 객체를 넣어주고, 스프레드 연산자로 얕은 복사
      [name]: value, // 바꿀 property key값과 value값을 넣어준다.
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    // 현재 inputs의 값들로 todo객체를 생성
    const todo = {
      id: id,
      title,
      body,
    };
    // 만들어진 객체를 배열에 넣어준 후 새배열을 반환
    setTodos(todos.concat(todo));

    // 나머지 값들은 초기화 시키고 id값만 1증가시킨다.
    setInputs({
      title: "",
      body: "",
      id: inputs.id + 1,
    });
  };
  return (
    <div className="layout">
      <div className="add-form">
        <input
          onChange={onChange}
          type="text"
          name="title"
          className="form-input title"
          value={title}
          placeholder="내용"
          required
        />

        <button className="form-btn" onClick={handleClick}>
          추가하기
        </button>
      </div>
      <h1 className="list-title">Todo List</h1>
      <List todos={todos}></List>
    </div>
  );
}

function List({ todos }) {
  return (
    <div className="list-container">
      <div className="list-wrapper">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id}></Todo>;
        })}
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className="todo-container">
      <div>{todo.title}</div>
    </div>
  );
}

export default App;
