/**
 * Datos de ejemplo de Marketing en la landing: los días flojos de Brasa y el link de su historia
 * del martes. Son inventados. Brasa es el mismo local de ejemplo que recorre toda la landing
 * (data/demo.ts).
 */

// ── Días flojos de Brasa: pedidos promedio por día y franja en las últimas 8 semanas ─────────────

export const FRANJAS = [
  { clave: 'mediodia', nombre: 'Mediodía', rango: '11 a 16' },
  { clave: 'tarde', nombre: 'Tarde', rango: '16 a 19' },
  { clave: 'noche', nombre: 'Noche', rango: '19 a 2' },
] as const

/** Lunes cerrado. El martes a la noche vende menos de la mitad que una noche promedio. */
export const SEMANA = [
  { corto: 'Lun', nombre: 'Lunes', abierto: false, franjas: [0, 0, 0] },
  { corto: 'Mar', nombre: 'Martes', abierto: true, franjas: [3.1, 1.0, 6.4] },
  { corto: 'Mié', nombre: 'Miércoles', abierto: true, franjas: [4.0, 1.2, 8.9] },
  { corto: 'Jue', nombre: 'Jueves', abierto: true, franjas: [4.6, 1.5, 11.8] },
  { corto: 'Vie', nombre: 'Viernes', abierto: true, franjas: [5.2, 2.1, 19.6] },
  { corto: 'Sáb', nombre: 'Sábado', abierto: true, franjas: [6.8, 2.9, 22.4] },
  { corto: 'Dom', nombre: 'Domingo', abierto: true, franjas: [7.1, 2.3, 16.5] },
]

const abiertos = SEMANA.filter((d) => d.abierto)
/** Promedio de cada franja entre los días abiertos (la vara contra la que se mide un día flojo). */
export const PROMEDIO_FRANJA = FRANJAS.map((_, i) => abiertos.reduce((t, d) => t + d.franjas[i], 0) / abiertos.length)

// ── El link de la historia del martes (hero y sistema) ────────────────────────────────────────────

export const HISTORIA_MARTES = {
  cuenta: 'brasa.burgers',
  hace: '2 h',
  slug: 'historia-martes',
  pedidos: 14,
  ventas: 186300,
}
