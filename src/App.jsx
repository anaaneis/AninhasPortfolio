import Navbar from "./components/layout/navbar";
import Hi from "./components/sections/hi";
import About from "./components/sections/about";
import MultiCursor from "./components/board/multiCursor";
import Tools from "./components/sections/tools";

function App() {
  return (
    <>
      {/* Invisible link that appears when you press Tab, to jump past the navigation */}
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <MultiCursor />

      <Navbar />

      <main
        id="main"
        className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-40 pt-14 sm:px-8"
      >
        <Hi />
        {/* NEXT SECTIONS HERE */}
        <About />
        <Tools />
      </main>
    </>
  );
}

export default App;
