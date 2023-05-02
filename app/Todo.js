'use client';

import { useRouter } from 'next/navigation';

export function Todo({ id, isCompleted, title }) {
  const router = useRouter();

  const onClick = async () => {
    await fetch(`/todos`, {
      method: 'PATCH',
      body: JSON.stringify({ id, isCompleted: !isCompleted }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await router.refresh();
  };

  return (
    <li
      className={`cursor-pointer hover:text-gray-700 ${
        isCompleted && 'line-through'
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  );
}
