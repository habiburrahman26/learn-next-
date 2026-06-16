type SingleTodoProps = PageProps<"/todo/[id]">;

async function SingleTodo(props: SingleTodoProps) {
  const { id } = await props.params;
  const par = await props.searchParams;

  console.log(par);

  return <div>{id} - </div>;
}

export default SingleTodo;
