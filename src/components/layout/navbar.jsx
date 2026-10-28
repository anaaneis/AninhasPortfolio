const LINKS = [
  { href: "#hi", label: "Hi" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tools" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    // A faixa branca fixa no topo
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="flex h-14 items-center justify-center px-3 sm:px-5">
        {/* overflow-x-auto: se não couber no ecrã, desliza para o lado */}
        <nav aria-label="Main" className="max-w-full overflow-x-auto">
          <ul className="flex items-center gap-1 rounded-xl bg-muted p-1">
            {/* .map() cria um <li> por cada item da lista LINKS */}
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
