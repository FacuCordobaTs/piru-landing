import { COMISION_MARKETER, PRECIO_BASE, RETENCION } from './oferta'

/**
 * Datos de ejemplo de la app de marketers (marketing.piru.app, docs/MVP_MARKETERS.md §4).
 * Son inventados: la marketer, sus locales y sus números existen sólo para mostrar las pantallas.
 * Brasa es el mismo local de ejemplo que recorre toda la landing (data/demo.ts).
 */

export const MARKETER = {
  nombre: 'Agustina Romero',
  corto: 'Agus',
  iniciales: 'AR',
  codigo: 'AGUS',
}

export type EstadoLocal = 'activa' | 'prueba' | 'sin-retencion'

export interface LocalCartera {
  id: string
  nombre: string
  rubro: string
  inicial: string
  color: string
  ventas30d: number
  ventas30dAnterior: number
  pedidos30d: number
  clientesNuevos30d: number
  /** Ventas cobradas por semana, de la más vieja a la actual (la sparkline). */
  ventasSemanales: number[]
  diaFlojo: string
  mensajesHoy: number
  estado: EstadoLocal
  /** Lo que paga por mes (base + módulos); es la base de la comisión. 0 = en prueba. */
  suscripcionMensual: number
}

const CON_RETENCION = PRECIO_BASE + RETENCION.precio

export const CARTERA: LocalCartera[] = [
  {
    id: 'brasa', nombre: 'Brasa', rubro: 'Hamburguesas & pizzas', inicial: 'B', color: '#7A2E3F',
    ventas30d: 4218600, ventas30dAnterior: 3512400, pedidos30d: 312, clientesNuevos30d: 46,
    ventasSemanales: [742000, 768500, 801200, 790400, 858300, 912600, 968100, 1031800],
    diaFlojo: 'Martes', mensajesHoy: 6, estado: 'activa', suscripcionMensual: CON_RETENCION,
  },
  {
    id: 'esquina', nombre: 'La Esquina', rubro: 'Empanadas', inicial: 'E', color: '#8A5A00',
    ventas30d: 1384200, ventas30dAnterior: 961300, pedidos30d: 142, clientesNuevos30d: 37,
    ventasSemanales: [190000, 201500, 215800, 224100, 262400, 281300, 309900, 330600],
    diaFlojo: 'Domingo', mensajesHoy: 8, estado: 'prueba', suscripcionMensual: 0,
  },
  {
    id: 'nonna', nombre: 'Nonna Pasta', rubro: 'Pastas caseras', inicial: 'N', color: '#1F4D3A',
    ventas30d: 2946800, ventas30dAnterior: 2712500, pedidos30d: 198, clientesNuevos30d: 23,
    ventasSemanales: [640000, 655800, 662100, 671900, 688300, 702600, 719400, 735100],
    diaFlojo: 'Lunes', mensajesHoy: 4, estado: 'activa', suscripcionMensual: CON_RETENCION,
  },
  {
    id: 'kai', nombre: 'Kai Sushi', rubro: 'Sushi & poke', inicial: 'K', color: '#1E3A5F',
    ventas30d: 3652400, ventas30dAnterior: 3804100, pedidos30d: 171, clientesNuevos30d: 19,
    ventasSemanales: [905000, 889200, 872400, 861800, 850300, 872900, 861200, 845600],
    diaFlojo: 'Miércoles', mensajesHoy: 0, estado: 'sin-retencion', suscripcionMensual: PRECIO_BASE,
  },
]

const suma = (f: (l: LocalCartera) => number) => CARTERA.reduce((t, l) => t + f(l), 0)

export const comisionDe = (l: LocalCartera) => (l.suscripcionMensual * COMISION_MARKETER) / 100

export const TOTALES_CARTERA = {
  ventas30d: suma((l) => l.ventas30d),
  ventas30dAnterior: suma((l) => l.ventas30dAnterior),
  clientesNuevos30d: suma((l) => l.clientesNuevos30d),
  mensajesHoy: suma((l) => l.mensajesHoy),
  localesConMensajes: CARTERA.filter((l) => l.mensajesHoy > 0).length,
  comisionMes: suma(comisionDe),
}

/** Lo que ya se cobró: el mes anterior, Kai todavía no estaba. */
export const COMISION_MES_ANTERIOR = { mes: 'Septiembre', monto: 2 * (CON_RETENCION * COMISION_MARKETER) / 100 }

/** Variación en %: "+20", "−4". */
export const variacion = (actual: number, anterior: number) => Math.round(((actual - anterior) / anterior) * 100)

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
export const MAXIMO_CELDA = Math.max(...SEMANA.flatMap((d) => d.franjas))

/** Los tres huecos más grandes, ya ordenados: día y franja abiertos por debajo del 70 % de su promedio. */
export const FLOJOS = [
  { dia: 'Martes', franja: 'Noche', pedidos: 6.4, promedio: PROMEDIO_FRANJA[2] },
  { dia: 'Martes', franja: 'Mediodía', pedidos: 3.1, promedio: PROMEDIO_FRANJA[0] },
  { dia: 'Miércoles', franja: 'Noche', pedidos: 8.9, promedio: PROMEDIO_FRANJA[2] },
]

export const CANDIDATOS_TOTAL = 34
export const CANDIDATOS_CONTROL = 3

/** Los primeros de la lista para el martes a la noche, y uno que no se invita (viene igual). */
export const CANDIDATOS = [
  { nombre: 'Martina González', iniciales: 'MG', segmento: 'Se está yendo', punto: 'bg-orange-500', motivo: 'Pidió 2 veces un martes · hace 3 semanas que no pide', elegible: true },
  { nombre: 'Pablo Ríos', iniciales: 'PR', segmento: 'Primer pedido', punto: 'bg-emerald-500', motivo: 'Su único pedido fue un martes, hace 16 días', elegible: true },
  { nombre: 'Sofía Méndez', iniciales: 'SM', segmento: 'Dormida', punto: 'bg-violet-500', motivo: 'Venía todos los meses · hace 2 meses', elegible: true },
  { nombre: 'Diego Luna', iniciales: 'DL', segmento: 'Se está yendo', punto: 'bg-orange-500', motivo: 'Pide cada 8 días y van 15', elegible: true },
  { nombre: 'Carla Paz', iniciales: 'CP', segmento: 'Perdida', punto: 'bg-rose-500', motivo: 'Hace 5 meses · pedía los martes', elegible: true },
  { nombre: 'Lucas Fernández', iniciales: 'LF', segmento: 'Activo', punto: 'bg-ink-3', motivo: 'Pidió el sábado: viene igual, no se invita', elegible: false },
]

// ── Hoy: los mensajes del día de Brasa, en modo manual ───────────────────────────────────────────

export const HOY = {
  fecha: 'Martes 14 de octubre',
  total: 6,
  enviados: 2,
  mensajes: [
    { nombre: 'Martina González', iniciales: 'MG', motivo: 'Día flojo · pidió 2 veces un martes', enviado: true },
    { nombre: 'Pablo Ríos', iniciales: 'PR', motivo: 'Día flojo · su único pedido fue un martes', enviado: true },
    {
      nombre: 'Diego Luna', iniciales: 'DL', motivo: 'Día flojo · pide cada 8 días y van 15', enviado: false, abierto: true,
      texto: ['¡Hola Diego! 👋', 'Hoy martes en Brasa tenés 15% OFF en toda la carta 🍔', 'Entrá desde este link y el descuento se aplica solo:'],
      link: 'my.piru.app/brasa/c/reactivacion?tk=v1.2d7c…',
    },
    { nombre: 'Sofía Méndez', iniciales: 'SM', motivo: 'Día flojo · venía todos los meses', enviado: false },
  ],
}

// ── Resumen de Brasa en la app ────────────────────────────────────────────────────────────────────

export const RESUMEN_BRASA = {
  clientesNuevos: 46,
  paraRecuperar: 38,
  recuperar: [
    { nombre: 'Se están yendo', cantidad: 17, punto: 'bg-orange-500' },
    { nombre: 'Dormidos', cantidad: 13, punto: 'bg-violet-500' },
    { nombre: 'Perdidos', cantidad: 8, punto: 'bg-rose-500' },
  ],
  volvieron: 11,
  contactados: 48,
  /** De los que no recibieron nada (grupo de control) volvió el 6 %. */
  volvieronControl: '6%',
  mejorLink: { nombre: 'Historia IG · Finde smash', pedidos: 38, ventas: 486200 },
}

// ── El link de la historia del martes (hero y sistema) ────────────────────────────────────────────

export const HISTORIA_MARTES = {
  cuenta: 'brasa.burgers',
  hace: '2 h',
  slug: 'historia-martes',
  pedidos: 14,
  ventas: 186300,
}
