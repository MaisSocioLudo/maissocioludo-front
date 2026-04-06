'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Redireciona para a página principal assim que o componente for montado no cliente
    window.location.href = '/';
  }, []);

  return null; // Não renderiza nada enquanto redireciona
}
