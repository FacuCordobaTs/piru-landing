import { getImage } from 'astro:assets'

/**
 * Fotos de los productos que se ven dentro de las réplicas. Son las de la tienda demo de Piru
 * (my.piru.app/prueba, servidas por images.piru.app): en el build Astro las baja, las achica y las
 * pasa a webp, así que el sitio publicado no depende de que sigan existiendo en el CDN.
 * Si una falla, se usa la URL original y el build sigue.
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

const entradas = await Promise.all(
  (Object.entries(ORIGEN) as [ClaveFoto, string][]).map(async ([clave, url]) => {
    const [chica, grande] = await Promise.all([optimizar(url, 400), optimizar(url, 900)])
    return [clave, { chica, grande }] as const
  }),
)

export const FOTOS = Object.fromEntries(entradas) as Record<ClaveFoto, Foto>
