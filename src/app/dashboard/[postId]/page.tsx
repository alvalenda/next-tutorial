import EditTodoCard from "@/components/edit-todo-card";
import axios from "axios";

interface PageProps {
  params: {
    postId: string;

    searchParams?: {
      searchParams: string;
    };
  };
}

const Page = async ({ params }: PageProps) => {
  const { postId } = params;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );

  const todoProps: TodoProps = {
    id: data.id,
    title: `TODO #${data.id}`,
    description: `TODO criada em ${Date.now()}`,
    content: data.title,
    footer: `${data.completed}`,
  };

  return (
    <>
      <EditTodoCard {...todoProps} />
    </>
  );
};

export default Page;

interface TodoProps {
  id: number;
  title: string;
  description: string;
  content: string;
  footer: string;
}
