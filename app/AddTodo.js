'use client';

import { useRouter } from 'next/navigation';

export function AddTodo() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    e.target.reset();

    await router.refresh();
  };

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        className="rounded-md border-2 border-blue-500 p-2"
      />
      <button className="rounded-md border-2 border-blue-800 bg-blue-500 p-2 text-blue-100 hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
}
