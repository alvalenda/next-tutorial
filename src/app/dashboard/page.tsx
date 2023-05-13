import axios from "axios";

interface PageProps {}

const Page = async () => {
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  await wait(3000);

  // throw new Error("Authorization failed");

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/2"
  );

  return (
    <div className="text-slate-200 text-5xl dark:text-red-500">
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default Page;
