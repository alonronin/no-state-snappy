import Link from 'next/link';

export async function Filter({ filter }) {
  return (
    <ul className="grid flex-1 grid-cols-3 divide-x overflow-hidden rounded-md p-2 text-center text-sm shadow-md">
      <li className={!filter && 'font-bold'}>
        <Link href={{ query: {} }} replace>
          All
        </Link>
      </li>
      <li className={filter === 'completed' && 'font-bold'}>
        <Link
          href={{
            query: { filter: 'completed' },
          }}
          replace
        >
          Completed
        </Link>
      </li>
      <li className={filter === 'uncompleted' && 'font-bold'}>
        <Link
          href={{
            query: { filter: 'uncompleted' },
          }}
          replace
        >
          UnCompleted
        </Link>
      </li>
    </ul>
  );
}
