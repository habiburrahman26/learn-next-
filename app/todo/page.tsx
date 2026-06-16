import Link from "next/link";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error("Response failed");
  }

  const result = await response.json();
  return result;
}

async function page() {
  const data = await getTodo();
  console.log(data);
  return (
    <div className="space-y-2">
      <p className="text-2xl py-4 text-center">Todo List</p>
      {data.slice(0, 20).map((todo: Todo) => (
        <Link href={`/todo/${todo.id}`} key={todo.id} className="block ">
          {todo.title}
        </Link>
      ))}
    </div>
  );
}

export default page;
