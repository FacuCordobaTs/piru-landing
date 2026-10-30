import { getImage } from 'astro:assets'

/**
 * Fotos de los productos que se ven dentro de las réplicas. Son las de la tienda demo de Piru
 * (my.piru.app/prueba) y las de las páginas publicadas de Alfajor y Che Milanesa (images.piru.app): en el build Astro las baja, las achica y las
 * pasa a webp, así que el sitio publicado no depende de que sigan existiendo en el CDN.
 * Si una falla, se usa la URL original y el build sigue.
 *
 * Sin await de nivel superior: en el build, el chunk de la página y el del servicio de imágenes
 * (sharp) se importan en círculo, y un await al cargar este módulo los deja esperándose entre sí.
 * Con Node (el build de Cloudflare) el proceso sale con código 0 sin generar la portada; con Bun
 * no se nota. Por eso las fotos se piden al renderizar, con `await cargarFotos()` en cada componente.
 */
const ORIGEN = {
  smash: 'https://images.piru.app/a6e4ac7f-314c-4ca8-ac55-98f7418b8154.jpeg',
  cheese: 'https://images.piru.app/fc622a3a-affa-466b-9370-2216a065d394.jpeg',
  clasica: 'https://images.piru.app/cf6e4b38-e29c-4ffe-b803-345174328012.webp',
  completa: 'https://images.piru.app/c6b689c5-74f8-49ab-835c-ec6eb114d9c5.jpeg',
  margarita: 'https://images.piru.app/43917d58-03b9-46c1-bdbf-a6f26b762548.jpeg',
  napolitana: 'https://images.piru.app/a4bebb5b-468a-41d2-811e-e6e82d67d45a.jpeg',
  romana: 'https://images.piru.app/b901bd42-8a58-44dd-95ea-c4732c9885b8.jpeg',
  empCarne: 'https://images.piru.app/3b5e30e4-c72e-4493-a034-c715439e8e71.jpeg',
  empPollo: 'https://images.piru.app/953a2c40-3ef3-44b2-bbd9-cbed93cceee6.jpeg',
  empArabes: 'https://images.piru.app/93cba681-4150-46aa-9d7c-90aa1cd6d8bc.jpeg',
  // Páginas publicadas (replicas/paginas/): fotos reales de Alfajor con Papas y de Che Milanesa.
  alfCheese: 'https://images.piru.app/5fe2dade-a659-4759-bc4a-13e4520d01d9.jpeg',
  alfAmerican: 'https://images.piru.app/8fb9d2e2-e75c-4d6e-b8e5-d1878532ed78.jpeg',
  alfOnion: 'https://images.piru.app/9ec61bf8-e608-4b08-b598-9847dcf00b21.jpeg',
  alfRemera: 'https://images.piru.app/a07c1e1d-2e8a-49d8-8b2f-bfac4b25a418.jpeg',
  alfBuzo: 'https://images.piru.app/e0013cb9-8c10-4999-907c-b56e399f9dd9.jpeg',
  cheClasico: 'https://images.piru.app/205e6044-cfc7-46bb-9797-c65422a8e927.jpeg',
  cheNapoli: 'https://images.piru.app/d78b98f5-50f7-4c35-b43c-898f6b10e982.jpeg',
  cheTurin: 'https://images.piru.app/88ba9f6c-dc0a-4f7b-a834-4fa75890b58e.jpeg',
  cheSantaFe: 'https://images.piru.app/8876b86a-b6fb-4f5b-8c92-623f97d36cfd.jpeg',
} as const

export type ClaveFoto = keyof typeof ORIGEN

interface Foto {
  /** Para tarjetas de producto (se ven de ~180 px). */
  chica: string
  /** Para el detalle del producto y el encabezado del mensaje de WhatsApp. */
  grande: string
}

async function optimizar(url: string, ancho: number): Promise<string> {
  try {
    const img = await getImage({ src: url, inferSize: true, width: ancho, format: 'webp', quality: 74 })
    return img.src
  } catch (error) {
    console.warn(`[fotos] no se pudo optimizar ${url}: ${(error as Error).message}`)
    return url
  }
}

let fotos: Promise<Record<ClaveFoto, Foto>> | undefined

/** Optimiza todas las fotos una sola vez por build; las llamadas siguientes reusan el resultado. */
export function cargarFotos(): Promise<Record<ClaveFoto, Foto>> {
  fotos ??= Promise.all(
    (Object.entries(ORIGEN) as [ClaveFoto, string][]).map(async ([clave, url]) => {
      const [chica, grande] = await Promise.all([optimizar(url, 400), optimizar(url, 900)])
      return [clave, { chica, grande }] as const
    }),
  ).then((entradas) => Object.fromEntries(entradas) as Record<ClaveFoto, Foto>)
  return fotos
}
