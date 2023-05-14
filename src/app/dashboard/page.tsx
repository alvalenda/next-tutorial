import axios from "axios";

interface PageProps {}

const Page = async ({}: PageProps) => {
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await wait(3000);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div className="text-5xl dark:text-red-500">
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default Page;
