// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://piru.app',
  // Las fotos de los productos de las réplicas son las de la tienda demo (images.piru.app):
  // Astro las baja y las optimiza a webp en el build, así la landing no depende del CDN en vivo.
  image: {
    domains: ['images.piru.app'],
  },
  // La experiencia del comensal es "Así te pide un cliente", en la home (que es para los locales).
  redirects: {
    '/experiencia': '/#pedido',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
