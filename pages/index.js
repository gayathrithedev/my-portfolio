import Link from "next/link";

import Header from "./components/Header";

export default function IndexPage() {
  return (
    <div>
      <Header />
      Hello World.{" "}
      <Link href="/hobbies">
        <a>Hobbies</a>
      </Link>
    </div>
  );
}
