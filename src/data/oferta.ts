/**
 * Todo lo comercial que la landing promete, en un solo lugar.
 *
 * Los precios son espejo del catálogo (MySQL): la fuente de verdad es la base, no este archivo.
 * Última verificación contra las migraciones (27 de septiembre de 2026):
 *  - suscripción base `piru` → `update_precio_suscripcion_base_40000.sql`;
 *  - `motor_recompra` ("Retención") → `update_modulo_retencion.sql`;
 *  - `avisos_automaticos_whatsapp` (200 avisos utility por mes) → `add_suscripcion_unica_modulos.sql`;
 *  - `crecimiento` (campañas) y `codigos_descuento` son incluidos → `update_modulo_crecimiento_gratuito.sql`.
 * El trial de 5 días es el del alta asistida (claim / panel interno, `DIAS_TRIAL_DEFAULT`).
 * Si cambia un precio en la base, cambialo acá también.
 */

export const WHATSAPP_NUMERO = '543408681915'
export const WHATSAPP_VISIBLE = '+54 9 3408 68-1915'
export const INSTAGRAM = 'https://www.instagram.com/piru.app'
export const TIENDA_DEMO = 'https://my.piru.app/prueba'

export function enlaceWhatsapp(texto = 'Hola! Quiero mi tienda en Piru para mi local.') {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`
}

export const PRECIO_BASE = 40000
export const DIAS_PRUEBA = 5

export const MODULOS_PAGOS = [
  {
    codigo: 'motor_recompra',
    nombre: 'Retención',
    precio: 30000,
    icono: 'repeat-2',
    descripcion: 'Te dice a quién escribirle, cuándo y qué decirle para que vuelva a pedir. Incluye el Club de Puntos.',
  },
  {
    codigo: 'avisos_automaticos_whatsapp',
    nombre: 'Avisos automáticos por WhatsApp',
    precio: 30000,
    icono: 'message-circle',
    descripcion: 'Tus clientes reciben el estado del pedido desde tu número: confirmado, en camino y listo. Incluye 200 avisos por mes.',
  },
] as const

export const INCLUIDO_EN_BASE = [
  'Tienda online con tu marca y tu link',
  'Delivery, retiro y pedidos programados',
  'Pedido en grupo',
  'Panel de pedidos y comandas impresas',
  'Punto de venta que funciona sin internet',
  'Mesas y app para mozos',
  'Cobros con Mercado Pago y transferencia',
  'Agenda de clientes con historial',
  'Links de campaña medidos y cupones',
  'Estadísticas de ventas',
  'Repartidores y cierre de caja',
  'Varias sucursales',
] as const

export const LOCALES = [
  { nombre: 'Che Milanesa', dominio: 'che-milanesa.com', url: 'https://che-milanesa.com', logo: '/chemilanesa.png', fondo: '#000000' },
  { nombre: 'Alfajor con Papas', dominio: 'alfajorconpapas.com', url: 'https://alfajorconpapas.com', logo: '/alfajor.jpeg', fondo: '#ffffff' },
] as const

const ARS = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 })
/** "$40.000": el formato de plata de toda la landing (y el que proponemos para la tienda). */
export const pesos = (n: number) => `$${ARS.format(Math.round(n))}`
