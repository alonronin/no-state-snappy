import { Todos } from './Todos';

export default async function Page({ searchParams }) {
  return (
    <div className="flex flex-col gap-4">
      <Todos {...searchParams} />
    </div>
  );
}
