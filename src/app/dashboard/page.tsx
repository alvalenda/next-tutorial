import TodoCard, { CardSkeleton } from "@/components/todo-card";
import { Todo } from "@/types";
import axios from "axios";
import { Suspense } from "react";

interface PageProps {}

const Page = async ({}: PageProps) => {
  // const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // await wait(3000);
  const todoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="mx-2 my-2 bg-slate-100 rounded-sm dark:bg-transparent grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {todoIds.map((todoId, index) => (
        <Suspense
          key={"suspense" + index}
          fallback={<CardSkeleton key={"skeleton" + index} />}
        >
          {/* @ts-expect-error Async Server Component */}
          <TodoCard key={"todo" + todoId} id={todoId} />
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
