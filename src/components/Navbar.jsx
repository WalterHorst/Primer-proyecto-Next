import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
    </nav>
  );
};
export default NavBar;
