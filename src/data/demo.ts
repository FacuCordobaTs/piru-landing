import type { ClaveFoto } from './fotos'

/**
 * El local de ejemplo que recorre toda la landing. Es inventado: los nombres, pedidos y números
 * son datos de ejemplo para mostrar las pantallas, no métricas de un cliente real.
 * La historia es una sola: Martina pide por la tienda (#1284), queda en la agenda y, tres semanas
 * después, Retención le prepara el mensaje para que vuelva.
 */

export const LOCAL = {
  nombre: 'Brasa',
  bajada: 'Hamburguesas & pizzas',
  username: 'brasa',
  sucursal: 'Centro',
  alias: 'piru.brasa.27',
}

export interface Producto {
  id: string
  nombre: string
  descripcion: string
  precio: number
  foto?: ClaveFoto
}

export const MENU: { categoria: string; productos: Producto[] }[] = [
  {
    categoria: 'Hamburguesas',
    productos: [
      { id: 'smash', nombre: 'Smash burger', descripcion: 'Medallones aplastados, cheddar, cebolla caramelizada y salsa de la casa', precio: 10500, foto: 'smash' },
      { id: 'cheese', nombre: 'Cheeseburger', descripcion: 'Medallón de 180 g, doble cheddar y pepinos', precio: 11500, foto: 'cheese' },
      { id: 'completa', nombre: 'Completa', descripcion: 'Lechuga, tomate, jamón, queso y huevo a la plancha', precio: 14000, foto: 'completa' },
      { id: 'clasica', nombre: 'Clásica', descripcion: 'Medallón, lechuga y tomate en pan de papa', precio: 9500, foto: 'clasica' },
    ],
  },
  {
    categoria: 'Pizzas',
    productos: [
      { id: 'napolitana', nombre: 'Napolitana', descripcion: 'Muzzarella, tomate en rodajas, ajo y albahaca', precio: 14500, foto: 'napolitana' },
      { id: 'margarita', nombre: 'Margarita', descripcion: 'Salsa de tomate, muzzarella y albahaca fresca', precio: 12500, foto: 'margarita' },
      { id: 'especial', nombre: 'Especial', descripcion: 'Muzzarella, jamón, morrones y aceitunas', precio: 15500, foto: 'romana' },
    ],
  },
  {
    categoria: 'Empanadas',
    productos: [
      { id: 'emp-carne', nombre: 'Carne a cuchillo', descripcion: 'Media docena, al horno', precio: 10000, foto: 'empCarne' },
      { id: 'emp-pollo', nombre: 'Pollo', descripcion: 'Media docena, al horno', precio: 10000, foto: 'empPollo' },
      { id: 'emp-arabes', nombre: 'Árabes', descripcion: 'Media docena, con limón', precio: 11000, foto: 'empArabes' },
    ],
  },
  {
    categoria: 'Para acompañar',
    productos: [
      { id: 'papas', nombre: 'Papas con cheddar', descripcion: 'Con panceta crocante y verdeo', precio: 6500 },
      { id: 'gaseosa', nombre: 'Gaseosa 1,5 L', descripcion: 'Cola, lima-limón o naranja', precio: 4000 },
    ],
  },
]

export const SMASH = {
  variantes: [
    { nombre: 'Simple', precio: 10500 },
    { nombre: 'Doble', precio: 13500 },
    { nombre: 'Triple', precio: 16500 },
  ],
  ingredientes: ['Pan de papa', 'Medallón', 'Cheddar', 'Cebolla caramelizada', 'Salsa de la casa'],
  sinIngrediente: 'Cebolla caramelizada',
  extras: [
    { nombre: 'Extra cheddar', precio: 1500, elegido: true },
    { nombre: 'Panceta', precio: 1800, elegido: false },
    { nombre: 'Huevo a la plancha', precio: 1200, elegido: false },
  ],
}

/** El pedido que sigue la historia. */
export const PEDIDO = {
  id: 1284,
  tipo: 'Delivery',
  cliente: 'Martina González',
  primerNombre: 'Martina',
  telefono: '+54 9 341 555-0182',
  direccion: 'Av. Belgrano 1450',
  hora: '21:04',
  metodo: 'Transferencia',
  campana: 'Historia IG · Finde smash',
  items: [
    { cantidad: 1, nombre: 'Smash burger · Doble', precio: 15000, extras: ['Extra cheddar'], sin: ['Cebolla caramelizada'] },
    { cantidad: 1, nombre: 'Papas con cheddar', precio: 6500, extras: [], sin: [] },
    { cantidad: 1, nombre: 'Gaseosa 1,5 L', precio: 4000, extras: [], sin: [] },
  ],
  envio: 1200,
  total: 26700,
  contexto: { numero: '7º', historico: 86400, ultimaVez: 'hace 12 días', nivel: 'Frecuente' },
}

/** La lista del panel: el #1284 arriba, recién entrado. */
export const PEDIDOS = [
  { id: 1284, tipo: 'delivery', etiqueta: 'Delivery', cliente: 'Martina González', detalle: 'Av. Belgrano 1450', total: 26700, pago: 'Transferencia', hace: 'hace 1 min', pendiente: false, nuevo: true },
  { id: 1283, tipo: 'takeaway', etiqueta: 'Takeaway', cliente: 'Lucas Fernández', detalle: '', total: 11500, pago: 'Efectivo', hace: 'hace 4 min', pendiente: true },
  { id: 1282, tipo: 'delivery', etiqueta: 'Delivery', cliente: 'Camila Ruiz', detalle: 'Mitre 872', total: 31400, pago: 'Mercado Pago', hace: 'hace 9 min', pendiente: false },
  { id: 1281, tipo: 'mesa', etiqueta: 'Mesa 4', cliente: 'Juan', detalle: '', total: 39500, pago: '', hace: 'hace 15 min', pendiente: true },
  { id: 1280, tipo: 'delivery', etiqueta: 'Delivery', cliente: 'Tomás Díaz', detalle: 'Santa Fe 2210', total: 19800, pago: 'Mercado Pago', hace: 'hace 19 min', pendiente: false, programado: '21:30' },
  { id: 1279, tipo: 'takeaway', etiqueta: 'Takeaway', cliente: 'Valentina Sosa', detalle: '', total: 9500, pago: 'Mercado Pago', hace: 'hace 22 min', pendiente: false },
] as const

export const CLIENTA = {
  nombre: 'Martina González',
  iniciales: 'MG',
  desde: '12 abr 2026',
  pedidos: 7,
  total: 86400,
  ticket: 12343,
  cadencia: 12,
  puntos: 864,
  top: [
    { cantidad: 5, nombre: 'Smash burger' },
    { cantidad: 3, nombre: 'Papas con cheddar' },
    { cantidad: 2, nombre: 'Napolitana' },
  ],
  telefono: '+54 9 341 555-0182',
  direccion: 'Av. Belgrano 1450',
  ultimoPedido: 'Hoy, 21:04',
  fuente: 'Historia de Instagram',
  primeraCompra: '12 abr 2026 · $14.200',
  campanas: [{ nombre: 'Historia IG · Finde smash', pedidos: 2, total: 41700 }],
  cupones: [{ codigo: 'BIENVENIDA', usos: 1, descontado: 1420 }],
}

export const MOTOR = {
  contactados: 48,
  mensajes: 61,
  volvieron: 11,
  retorno: '23%',
  recuperado: 186300,
  enCola: 17,
  ritmo: 20,
  horario: 'Viernes 21:00 hs',
  horarioMotivo: 'su horario habitual',
  tiempoSinPedir: '3 semanas',
}

/** El 1º toque de un cliente en riesgo, tal cual el recetario (`recetas-recompra.ts`). */
export const MENSAJE_RECOMPRA = [
  '¡Hola Martina! 👋',
  `Venís pidiendo seguido en ${LOCAL.nombre} y hace 3 semanas que no te vemos. Se nos antojó tentarte con la Smash burger. 😋`,
  'Tu pedido te está esperando: armalo en segundos desde acá.',
  'Tocá el botón y pedí en segundos 👇',
]

export const ESCALERA = [
  { toque: '1º mensaje', titulo: 'El antojo', detalle: 'La foto de su plato favorito y una invitación a repetir.', descuento: 'Sin descuento' },
  { toque: '2º mensaje', titulo: 'El recordatorio', detalle: 'Si no volvió, un empujón con su pedido de siempre.', descuento: '10% OFF' },
  { toque: '3º mensaje', titulo: 'El último llamado', detalle: 'Una oferta fuerte, con vencimiento. Es el último intento.', descuento: '20% OFF · 48 hs' },
]

export const CAMPANAS = [
  { icono: 'package', color: 'amber', nombre: 'QR en bolsas de delivery', canal: 'Volantes & Packaging', tipo: 'Link de seguimiento', slug: 'bolsas', visitas: 138, pedidos: 29, ventas: 402600 },
  { icono: 'sticker', color: 'rose', nombre: 'Historia IG · Finde smash', canal: 'Historias de Instagram', tipo: 'Promoción de producto', slug: 'finde-smash', visitas: 412, pedidos: 38, ventas: 486200 },
  { icono: 'handshake', color: 'violet', nombre: 'Reseña de @comeconjuli', canal: 'Influencers', tipo: 'Carrito prearmado', slug: 'juli', visitas: 691, pedidos: 22, ventas: 311500 },
  { icono: 'rocket', color: 'sky', nombre: 'Meta Ads · Combo pareja', canal: 'Pauta digital', tipo: 'Carrito prearmado', slug: 'combo-pareja', visitas: 530, pedidos: 17, ventas: 268900 },
  { icono: 'circle-play', color: 'emerald', nombre: 'Reel papas con cheddar', canal: 'Reels & TikTok', tipo: 'Link de seguimiento', slug: 'reel-papas', visitas: 1204, pedidos: 9, ventas: 118700 },
] as const

export const METRICAS = {
  periodo: 'Septiembre 2026',
  facturado: 4218600,
  pedidos: 312,
  ticket: 13521,
  pagos: [
    { nombre: 'Mercado Pago', monto: 1940000, pct: 46 },
    { nombre: 'Transferencias', monto: 1476500, pct: 35 },
    { nombre: 'Efectivo', monto: 802100, pct: 19 },
  ],
  origen: [
    { icono: 'globe', nombre: 'Por la web', monto: 3121800, detalle: '231 ped · 74%' },
    { icono: 'shopping-bag', nombre: 'Anotados a mano', monto: 1096800, detalle: '81 ped · 26%' },
  ],
  top: [
    { nombre: 'Smash burger', unidades: 118, total: 1593000 },
    { nombre: 'Napolitana', unidades: 52, total: 754000 },
    { nombre: 'Carne a cuchillo', unidades: 41, total: 410000 },
    { nombre: 'Cheeseburger', unidades: 33, total: 379500 },
    { nombre: 'Papas con cheddar', unidades: 49, total: 318500 },
  ],
  historico: { facturacion: 31480200, pedidos: 2406 },
}

export const MESAS = [
  { numero: 1 }, { numero: 2, cliente: 'Flor', total: 22400 }, { numero: 3 }, { numero: 4, cliente: 'Juan', total: 39500 }, { numero: 5 },
  { numero: 6, cliente: 'Pablo', total: 17600 }, { numero: 7 }, { numero: 8 }, { numero: 9, cliente: 'Ceci', total: 29300 }, { numero: 10 },
  { numero: 11 }, { numero: 12, cliente: 'Andrés', total: 12800 }, { numero: 13 }, { numero: 14 }, { numero: 15 },
]

/** Lo que el mozo está tomando en la Mesa 4 desde la app de mozos. */
export const COMANDA_MESA = {
  mesa: 'Mesa 4',
  confirmados: [
    { cantidad: 2, nombre: 'Napolitana', precio: 29000 },
    { cantidad: 1, nombre: 'Gaseosa 1,5 L', precio: 4000 },
  ],
  porConfirmar: [{ cantidad: 1, nombre: 'Papas con cheddar', precio: 6500 }],
}

/** El borrador del punto de venta: un pedido tomado en el mostrador. */
export const BORRADOR_POS = {
  items: [
    { nombre: 'Carne a cuchillo', precio: 10000, cantidad: 2, nota: '' },
    { nombre: 'Napolitana', precio: 14500, cantidad: 1, nota: '' },
  ],
  total: 34500,
}

/** Pedido en grupo: cada uno eligió desde su celular. */
export const SALA = {
  anfitrion: 'Juli',
  personas: [
    { nombre: 'Juli', yo: true, items: [{ nombre: 'Smash burger · Doble', precio: 13500 }] },
    { nombre: 'Sofi', items: [{ nombre: 'Cheeseburger', precio: 11500 }] },
    { nombre: 'Nico', items: [{ nombre: 'Napolitana', precio: 14500 }] },
    { nombre: 'Mati', items: [{ nombre: 'Papas con cheddar', precio: 6500 }, { nombre: 'Gaseosa 1,5 L', precio: 4000 }] },
  ],
}
