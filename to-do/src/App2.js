import "./App.css";
import Header from "./component/Header";
import { Todoupdatemodal } from "./component/ToDoUpdateModal";
import { TodoForm } from "./component/ToDoForm";
import ToDoList from "./component/ToDoList";
function App() {
  return (
    <div className="main-app">
      <div className="todo-wrapper">
        <Header appName="ToDo App" />
        <Todoupdatemodal />
        <TodoForm/>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;