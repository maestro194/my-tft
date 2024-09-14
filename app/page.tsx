import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-auto flex-col min-h-screen w-full items-center justify-between p-12">
      <Header />
    </main>
  );
}
