/**
 * Gráficos chicos de la app de marketers, en SVG propio (docs/MVP_MARKETERS.md §4.2: sparklines y
 * barras no justifican una dependencia). Funciones puras: se calculan en el build.
 */

export interface Sparkline {
  /** `d` de la línea. */
  linea: string
  /** `d` del área bajo la línea (para el degradé). */
  area: string
  /** Último punto, para marcarlo. */
  ultimo: [number, number]
}

export function sparkline(valores: number[], ancho: number, alto: number, margen = 3): Sparkline {
  const min = Math.min(...valores)
  const max = Math.max(...valores)
  const rango = max - min || 1
  const paso = (ancho - margen * 2) / Math.max(1, valores.length - 1)
  const puntos = valores.map((v, i): [number, number] => [
    margen + i * paso,
    alto - margen - ((v - min) / rango) * (alto - margen * 2),
  ])
  const linea = puntos.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const ultimo = puntos[puntos.length - 1]
  const area = `${linea} L${ultimo[0].toFixed(1)},${alto} L${puntos[0][0].toFixed(1)},${alto} Z`
  return { linea, area, ultimo }
}

/**
 * Color de una celda del mapa de calor: de `brand-soft` a `brand` en cinco escalones, para que la
 * diferencia se lea sin leyenda. Devuelve también el color del texto que le va encima.
 */
const ESCALA = ['#FFF4E8', '#FFE1C2', '#FFC48A', '#FF9F45', '#FF7A00']

export function colorCelda(valor: number, maximo: number): { fondo: string; texto: string } {
  const i = Math.min(ESCALA.length - 1, Math.floor((valor / maximo) * ESCALA.length))
  return { fondo: ESCALA[i], texto: i >= 3 ? '#FFFFFF' : '#4A433C' }
}

export const ESCALA_CALOR = ESCALA

/** "6,4" */
export const decimal = (n: number) => n.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

/**
 * Id único para el degradé de un SVG. Una réplica puede aparecer dos veces en la misma página (la
 * cartera está en el hero y en "Tu app"): con ids repetidos, `url(#…)` apunta al primero, que puede
 * estar oculto con `display: none`, y entonces el degradé no se pinta.
 */
let ultimoId = 0
export const idSvg = (base: string) => `${base}-${++ultimoId}`
