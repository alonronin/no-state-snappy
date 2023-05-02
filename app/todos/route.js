export async function POST(request) {
  const data = await request.json();

  await fetch(`${process.env.API_URL}/todos/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PATCH(request) {
  const { id, isCompleted } = await request.json();

  await fetch(`${process.env.API_URL}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ isCompleted }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return new Response();
}
