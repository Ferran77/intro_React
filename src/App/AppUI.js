import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />  
      
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
          {error && <p>Chale! Algo está mal</p>}
          {loading && <p>Estamos trabajando, aguanta</p>}
          {(!loading && !searchedTodos.length) && <p>Vientos... Crea tu primera tarea</p>}
  
  
          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      
      </TodoList>
        )}
        </TodoContext.Consumer>
      <CreateTodoButton />
      
  </React.Fragment>
  );
} 

export { AppUI };