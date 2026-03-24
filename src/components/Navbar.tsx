import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Baixar', href: '/download' },
  { label: 'Página Inicial', href: '/' },
  { label: 'Contato', href: '/contato' },
];

const colorMap: Record<NavbarColor, string> = {
  azul: 'var(--color-azul)',
  vermelho: 'var(--color-vermelho)',
  verde: 'var(--color-verde)',
  amarelo: 'var(--color-amarelo)',
};

type NavbarColor = 'azul' | 'vermelho' | 'verde' | 'amarelo';

type NavbarProps = {
  color?: NavbarColor;
};

const Navbar: React.FC<NavbarProps> = ({ color = 'azul' }) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        backgroundColor: colorMap[color],
        height: '70px',
        paddingRight: '40px',
        position: 'relative',
      }}
    >
      {/* LOGO */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '-10px',
          zIndex: 1,
        }}
      >
        <Link href="./">
          <Image
            alt="logo"
            height={200}
            width={200}
            aria-hidden={true}
            src="/imagens/navlogo.png"
          />
        </Link>
      </div>

      {/* NAV */}
      <nav style={{ zIndex: 2 }}>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item.href} style={{ marginRight: '20px' }}>
              <a
                href={item.href}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;