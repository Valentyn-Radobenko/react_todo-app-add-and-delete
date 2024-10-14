import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { Error } from '../../types/Error';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<Error>>;
};

export const TodoList: React.FC<Props> = ({
  todos,
  setErrorMessage,
  setTodos,
}) => {
  return todos.map(({ id, title, completed }) => {
    return (
      <TodoItem
        key={id}
        id={id}
        title={title}
        setTodos={setTodos}
        completed={completed}
        setErrorMessage={setErrorMessage}
      />
    );
  });
};
