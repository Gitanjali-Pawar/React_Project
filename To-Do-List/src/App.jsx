import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App(){
return<center className="todo-container"><AppName></AppName>
<div className="to"><AppTodo></AppTodo></div>
<ToDoItem1></ToDoItem1>
<ToDoItem2></ToDoItem2>
</center>





 
};

export default App;