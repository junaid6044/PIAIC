import Image from "next/image";

export default function Home() {
  return (
    <>
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="http://localhost:8000/todos"
        target="_blank"
      >Get All Todos</a>
    </>
  );
}
