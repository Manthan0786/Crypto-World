import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 font-mono mx-auto w-full px-2 sm:px-6 lg:px-8 fixed z-50">
      <div className="h-14 flex items-center justify-center">
        <ul className="flex space-x-4">
          <li> <Link href="/home">Home</Link></li>
          <li> <Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}
