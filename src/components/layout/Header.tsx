import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 text-transparent bg-clip-text">
          BentoDigital
        </span>
      </div>

      <nav className="hidden md:flex gap-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="font-medium hover:text-primary-600 transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="md">
          Sign In
        </Button>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </div>
    </header>
  );
}
