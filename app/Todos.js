import { Todo } from './Todo';
import { AddTodo } from './AddTodo';
import Link from 'next/link';
import { Filter } from './Filter';

export async function Todos({ filter }) {
  const todos = await fetch(`${process.env.API_URL}/todos`, {
    cache: 'no-cache',
  }).then((res) => res.json());

  return (
    <>
      <h1 className="text-2xl font-bold">Todos</h1>

      <ul className="flex flex-col gap-2 text-black">
        {todos
          .filter(({ isCompleted }) => {
            if (filter === 'completed') {
              return isCompleted;
            }

            if (filter === 'uncompleted') {
              return !isCompleted;
            }

            return true;
          })
          .map((props) => (
            <Todo {...props} />
          ))}
      </ul>

      <AddTodo />
      <Filter filter={filter} />
    </>
  );
}
