import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await fetch(`/api/some-data/${id}`);
  if (!data.ok) {
    notFound();
  }
  return data.json();
}

export default async function ExamplePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  if (!data) {
    notFound();
  }

  return <div>{/* Your content */}</div>;
}
