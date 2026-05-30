export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Saswati</h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}