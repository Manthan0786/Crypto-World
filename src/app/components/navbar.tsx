export default function Navbar() {
  return (
    <nav className="bg-gray-800 font-mono mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <div className="h-14 flex items-center justify-center">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}
