'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code, Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
  ];
  
  const productLinks = [
      { name: 'Haker-MCP', href: '/products#haker-mcp'},
      { name: 'MeaCode-Studio', href: '/products#meacode-studio'},
      { name: 'MeaCore-IA', href: '/products#meacore-ia'},
      { name: 'Generador de CV', href: '/products#generador-cv'},
      { name: 'LEGADO', href: '/products#legado'}
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">MeaCore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.name}
            </Link>
          ))}
           <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {productLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-4">
           <Button asChild className="hidden md:flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={closeMenu}>
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">MeaCore</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                    {link.name}
                  </Link>
                ))}
                 <div className="text-lg font-medium text-muted-foreground">Products</div>
                  <div className="flex flex-col gap-4 pl-4">
                    {productLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
