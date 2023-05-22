import TodoCard from "@/components/todo-card";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

interface PageProps {}

const Page = async ({}: PageProps) => {
  // const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // await wait(3000);
  const todoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const getTodos = async () => {
    const todosData = await Promise.all(
      todoIds.map(async (id) => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        return data;
      })
    );
    return todosData;
  };

  const todoList: Todo[] = await getTodos();

  if (!todoList) return null;

  const todoProps: TodoProps[] = todoList.map((todo) => ({
    id: todo.id,
    title: `TODO #${todo.id}`,
    description: `TODO criada em ${Date.now()}`,
    content: todo.title,
    footer: `${todo.completed}`,
  }));

  return (
    <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {todoProps.map((todoProp, index) => (
        <Suspense
          key={"suspense" + index}
          fallback={<div className="animate-pulse">Loading...</div>}
        >
          <TodoCard key={"todo" + index} {...todoProp} />
        </Suspense>
      ))}
    </div>
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

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
