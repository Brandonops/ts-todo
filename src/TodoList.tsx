import React from "react";
import "./TodoListItem";
import "./TodoListItem.css";
import { Todo } from "./types";
import { TodoListItem } from "./TodoListItem";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Fade } from "react-awesome-reveal";

interface TodoListProps {
  setTodos: any;
  todos: Array<Todo>;
  deleteTodo: any;
  editTodo: any;
  setEditData: any;
  toggleModal: any;
  setToggleEditOrAddForm: any;
  toggleTooltip: boolean;

}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  background: isDragging ? "#2664FA" : "",
  ...draggableStyle
})

export const TodoList: React.FC<TodoListProps> = ({
  setTodos,
  todos,
  deleteTodo,
  editTodo,
  setEditData,
  toggleModal,
  setToggleEditOrAddForm,
  toggleTooltip,

}) => {

  //drag and drop
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    const items = Array.from(todos)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setTodos(items)
  }

  return (
    <div className="col-ul-container" >
      <Fade delay={200}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  todos.map((todo, index) => {
                    return (
                      <Draggable key={index} draggableId={index.toString()} index={index}>
                        {(provided, snapshot) => (
                          <TodoListItem reft={provided.innerRef}
                            draggable={provided.draggableProps}
                            dragHandle={provided.dragHandleProps}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                            setEditData={setEditData}
                            toggleModal={toggleModal}
                            setToggleEditOrAddForm={setToggleEditOrAddForm}
                            toggleTooltip={toggleTooltip}
                          />
                        )}
                      </Draggable>
                    );
                  })
                }
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Fade>
    </div>
  );
};
