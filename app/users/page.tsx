async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Response failed");
  }

  const result = await response.json();
  return result;
}

async function page() {
  const users = await getUsers();
  return (
    <div>
      {users.map((user: { id: number; name: string }) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default page;
