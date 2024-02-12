import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-3 bg-slate-950">
      <Link href={"/"} className="text-white">
        <h1>App</h1>
      </Link>
      <ul className="flex gap-x-4">
        <li>
          <Link href={"/about"} className="text-white">About</Link>
        </li>
        <li>
          <Link href={"/posts"} className="text-white">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
