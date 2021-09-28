export type Todo = {
  id: string;
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type DeleteTodo = (selectedTodo: Todo) => void;

export type EditTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: Todo) => void;
