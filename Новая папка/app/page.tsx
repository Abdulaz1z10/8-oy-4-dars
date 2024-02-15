import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Home page </h1>
      <Link href="/login">Go to login</Link>
    </main>
  );
}
