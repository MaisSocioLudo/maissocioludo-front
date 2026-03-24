import Image from 'next/image';
import React from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Página Inicial', href: '/' },
  { label: 'Contato', href: '/contato' },
];

const Navbar: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        backgroundColor: '#C02A3A',
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
        <Image
          alt="logo"
          height={200}
          width={200}
          src="/imagens/navlogo.png"
        />
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