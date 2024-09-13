import ClientComp from "@/app/ClientComp";

const fetchData = async (url: string) => {
  const res = await fetch(url, { next: { revalidate: 0 } });
  const json = await res.json();
  return json[0]
}

const urlObj = {
  1: "https://jsonplaceholder.typicode.com/posts",
  2: "https://jsonplaceholder.typicode.com/todos",
  3: "https://jsonplaceholder.typicode.com/users",
}

export default async function Home() {

  const randomInt = Math.floor(Math.random() * 3) + 1;

  const url = urlObj[randomInt as keyof typeof urlObj]

  const data = await fetchData(url)

  return (
    <ClientComp data={data} />
  );
}
