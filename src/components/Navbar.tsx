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
  { label: 'Baixar', href: '/download' },
  { label: 'Página Inicial', href: '../' },
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

  return (
    <header
      id={"nav"}
      style={{
        backgroundColor: colorMap[color],
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px', backgroundColor: colorMap[color], height: '70px', paddingRight: '40px', position: 'relative', }} >

        {!menuOpen && <>
          {/* LOGO */} <div style={{ position: 'absolute', left: '20px', top: '-10px', zIndex: 1, }} >
            <Link href="../"> <Image alt="logo" height={200} width={200} aria-hidden={true} src="/imagens/navlogo.png" />
            </Link>
          </div>
        </>}

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="navbar-mobile-button"
        >
          <span
            style={{
              width: '26px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              display: 'block',
            }}
          />
          <span
            style={{
              width: '26px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              display: 'block',
            }}
          />
          <span
            style={{
              width: '26px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              display: 'block',
            }}
          />
        </button>

        {/* NAV DESKTOP */}
        <nav className="navbar-desktop">
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '20px',
            }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav
          className="navbar-mobile-menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            backgroundColor: colorMap[color],
            padding: '12px 16px 20px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        .navbar-desktop {
          display: block;
        }

        @media (max-width: 768px) {
          .navbar-desktop {
            display: none;
          }

          .navbar-mobile-button {
            display: flex !important;
          }

          .navbar-mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;