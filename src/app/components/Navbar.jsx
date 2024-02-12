import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-3 bg-slate-950">
      <h1>App</h1>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
