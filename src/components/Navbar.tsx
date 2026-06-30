'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type NavbarColor = 'azul' | 'vermelho' | 'verde' | 'amarelo';

type NavbarProps = {
  color?: NavbarColor;
};

const navItems: NavItem[] = [
  { label: 'Livros didáticos', href: '/livros' },
  { label: 'Contato', href: '/contato' },
];

const colorMap: Record<NavbarColor, string> = {
  azul: 'var(--color-azul)',
  vermelho: 'var(--color-vermelho)',
  verde: 'var(--color-verde)',
  amarelo: 'var(--color-amarelo)',
};

const Navbar: React.FC<NavbarProps> = ({ color = 'azul' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const backgroundColor = colorMap[color];

  return (
    <header
      id="nav"
      className="relative z-[1000]"
      style={{ backgroundColor }}
    >
      <div className="relative mx-auto flex h-[70px] max-w-7xl items-center justify-end gap-5 px-4 sm:pr-10 lg:px-8">
        {!menuOpen && (
          <div className="absolute left-5 top-[-10px] z-10">
            <Link href="/" aria-label="Ir para a página inicial">
              <Image
                alt="SocioLudo"
                height={200}
                width={200}
                priority
                src="/imagens/navlogo.png"
                style={{ height: 'auto' }}
              />
            </Link>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        <nav className="hidden md:block">
          <ul className="flex list-none items-center gap-3 lg:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-bold text-white transition hover:bg-white/15 lg:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-white/20 px-4 pb-4 pt-2 md:hidden"
          style={{ backgroundColor }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-3 py-3 text-base font-bold text-white transition hover:bg-white/15"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
