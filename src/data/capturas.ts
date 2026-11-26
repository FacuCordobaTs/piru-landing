import type { ImageMetadata } from 'astro'
import type { IdTema } from './oferta'

/**
 * Las capturas de los temas (`src/assets/temas/<id>-movil.png` y `<id>-compu.png`) y de las páginas
 * publicadas (`src/assets/paginas/`). Astro las optimiza a webp en el build.
 */
const archivos = import.meta.glob<ImageMetadata>('../assets/{temas,paginas}/*.png', { eager: true, import: 'default' })
const buscar = (ruta: string) => {
  const img = archivos[`../assets/${ruta}.png`]
  if (!img) throw new Error(`Falta la captura ${ruta}.png`)
  return img
}

export const capturaTema = (id: IdTema, modo: 'movil' | 'compu' = 'movil') => buscar(`temas/${id}-${modo}`)
export const capturaPagina = (nombre: 'alfajor' | 'che', modo: 'movil' | 'compu' = 'movil') => buscar(`paginas/${nombre}-${modo}`)
