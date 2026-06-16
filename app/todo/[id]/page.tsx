import { refresh } from "next/cache";
import { redirect } from "next/navigation";

type SingleTodoProps = PageProps<"/todo/[id]">;

async function createPost(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);
  refresh();
  redirect("/");
}

async function SingleTodo(props: SingleTodoProps) {
  const { id } = await props.params;
  const par = await props.searchParams;

  return (
    <div>
      {id} -
      <form action={createPost}>
        <input
          type="text"
          name="title"
          className="border p-2"
          placeholder="name"
        />
        <input
          type="text"
          name="content"
          className="border p-2 ml-2"
          placeholder="content"
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 border ml-2 cursor-auto"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default SingleTodo;
