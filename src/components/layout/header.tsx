'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
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
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#portfolio' },
    { name: 'Planes', href: '#pricing' },
  ];
  
  const productLinks = [
      { name: 'MeaCode Studio', href: 'https://github.com/MeaCore-Enterprise/MeaCode-Studio'},
      { name: 'Haker-MCP', href: '#'},
      { name: 'Nexusify SDK', href: '#'},
  ]

  return (
    <header className="sticky top-0 z-50 w-full glass border-b-0">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="MeaCore Icon" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-sm" style={{ imageRendering: 'high-quality' }} />
          <span className="text-xl font-extrabold tracking-tight text-foreground">MeaCore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.name}
            </Link>
          ))}
           <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
              Productos <ChevronDown className="h-4 w-4" />
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
            <Link href="#contact">Contáctanos</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">A list of navigation links for the MeaCore website.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-3 mb-4" onClick={closeMenu}>
                  <Image src="/logo.png" alt="MeaCore Icon" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-sm" style={{ imageRendering: 'high-quality' }} />
                  <span className="text-xl font-extrabold tracking-tight text-foreground">MeaCore</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                    {link.name}
                  </Link>
                ))}
                 <div className="text-lg font-medium text-muted-foreground">Productos</div>
                  <div className="flex flex-col gap-4 pl-4">
                    {productLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                <Button asChild className="mt-4">
                  <Link href="#contact" onClick={closeMenu}>Contáctanos</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
