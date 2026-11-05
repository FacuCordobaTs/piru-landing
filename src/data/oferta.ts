/**
 * Todo lo comercial que la landing promete, en un solo lugar.
 *
 * Los precios son espejo del catálogo (MySQL): la fuente de verdad es la base, no este archivo.
 * Última verificación contra las migraciones (27 de septiembre de 2026):
 *  - suscripción base `piru` → `update_precio_suscripcion_base_40000.sql`;
 *  - `crecimiento` (campañas) y `codigos_descuento` son incluidos → `update_modulo_crecimiento_gratuito.sql`.
 * El trial de 5 días es el del alta asistida (claim / panel interno, `DIAS_TRIAL_DEFAULT`).
 * Si cambia un precio en la base, cambialo acá también.
 *
 * La landing presenta todos los módulos como parte de la suscripción, Retención incluida (decisión
 * comercial del 29 de octubre de 2026; el catálogo en MySQL todavía tiene a `motor_recompra` como
 * módulo pago y hay que alinearlo con una migración). El único costo aparte son los avisos
 * automáticos por WhatsApp, que se cobran por mensaje enviado.
 */

export const WHATSAPP_NUMERO = '543408681915'
export const WHATSAPP_VISIBLE = '+54 9 3408 68-1915'
export const INSTAGRAM = 'https://www.instagram.com/piru.app'
export const TIENDA_DEMO = 'https://my.piru.app/prueba'

/** La guía del panel, pública: la sección de clientes y marketing. */
export const GUIA_MARKETING = 'https://admin.piru.app/guia#clientes'

export const TEXTO_WA_LOCAL = 'Hola! Quiero la página de mi local en Piru.'
export const TEXTO_WA_DISENO = 'Hola! Quiero que me diseñen la página de mi local.'

/** Link a nuestro WhatsApp con el texto ya escrito. */
export function enlaceWhatsapp(texto = TEXTO_WA_LOCAL) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`
}

export const PRECIO_BASE = 40000
export const DIAS_PRUEBA = 5

/** Retención (`motor_recompra`): en la landing viene con la suscripción, sin costo aparte. */
export const RETENCION = {
  codigo: 'motor_recompra',
  nombre: 'Retención',
  icono: 'repeat-2',
  descripcion: 'Te dice a quién escribirle, cuándo y qué decirle para que vuelva a pedir. Incluye el Club de Puntos.',
  incluye: ['Los mensajes de recompra de cada día', 'El club de puntos', 'Las invitaciones de los días flojos'],
} as const

export const INCLUIDO_EN_BASE = [
  'Tu página, con plantilla o diseño propio',
  'Editor, vista previa y versiones',
  'Tu dominio o tulocal.piru.app',
  'Delivery, retiro y pedidos programados',
  'Pedidos a tu WhatsApp, como siempre',
  'Pedido en grupo',
  'Panel de pedidos y comandas impresas',
  'Punto de venta que funciona sin internet',
  'Mesas y app para mozos',
  'Cobros con Mercado Pago y transferencia',
  'Base de clientes y quién se está yendo',
  'Links de campaña medidos y cupones',
  'Días flojos y estadísticas de ventas',
  'Stock, repartidores, caja y sucursales',
  'Facturación electrónica con ARCA',
  'Recompra, club de puntos y días flojos',
] as const

/**
 * Páginas publicadas con Piru que muestra la home (secciones/Paginas.astro). Las capturas están en
 * public/paginas/ y se sacaron de los sitios en vivo: si un local cambia mucho su página, se
 * vuelven a sacar. `autor` dice quién la diseñó.
 */
export const PAGINAS = [
  {
    nombre: 'Alfajor con Papas',
    dominio: 'alfajorconpapas.com',
    url: 'https://alfajorconpapas.com',
    autor: 'equipo',
    texto: 'Hamburguesas smash con nombre de golosina. La diseñamos con su marca: la letra condensada, el verde, el naranja y un video de portada. Su tienda de ropa vive en la misma página.',
    movil: '/paginas/alfajor-movil.webp',
    escritorio: '/paginas/alfajor-escritorio.webp',
    fondo: '#083821',
    tinta: '#f2eee2',
  },
  {
    nombre: 'Che Milanesa',
    dominio: 'che-milanesa.com',
    url: 'https://che-milanesa.com',
    texto: 'Negro, amarillo y una tipografía que se lee desde lejos. La portada vende las promos de la semana y los puntos que suma cada pedido.',
    movil: '/paginas/chemilanesa-movil.webp',
    escritorio: '/paginas/chemilanesa-escritorio.webp',
    fondo: '#111111',
    tinta: '#ffb800',
  },
] as const

/**
 * Las plantillas de la tienda (web/src/features/tienda/: elegante, moderna, artesanal). La home
 * muestra éstas como las primeras de la galería, sin decir que son todas. Las capturas salen de la
 * suite de web (`tests/tienda.spec.ts`, local "Casa Oliva") con fotos de la tienda demo.
 */
export const PLANTILLAS = [
  {
    clave: 'elegante',
    nombre: 'Elegante',
    para: 'Restaurantes, bodegones y cocina de autor',
    texto: 'Tu nombre en grande, la carta como un índice y el plato de la casa enmarcado. Mucho aire y letra de diario.',
  },
  {
    clave: 'moderna',
    nombre: 'Moderna',
    para: 'Hamburgueserías, pizzerías y comida rápida',
    texto: 'Un bloque de color de punta a punta, tu favorito en una tarjeta y la carta en pestañas para pedir rápido.',
  },
  {
    clave: 'artesanal',
    nombre: 'Artesanal',
    para: 'Panaderías, cafés y cocinas caseras',
    texto: 'Toldo, pizarrón y fotos con cinta. Se siente como entrar a un local de barrio, aunque estés en el celular.',
  },
] as const

/**
 * Los módulos del catálogo (tabla `modulo`, `backend/src/lib/modulos.ts`), con el nombre que usa la
 * landing. Todos vienen con la suscripción; `costo` es lo único que se paga aparte y se muestra en
 * su tarjeta (hoy, sólo los avisos automáticos, por mensaje enviado).
 */
/** Las áreas en las que la home agrupa los módulos (secciones/Modulos.astro). */
export const AREAS_MODULOS = [
  { clave: 'salon', nombre: 'Salón y mostrador' },
  { clave: 'envios', nombre: 'Envíos' },
  { clave: 'cobros', nombre: 'Cobros' },
  { clave: 'gestion', nombre: 'Gestión' },
  { clave: 'clientes', nombre: 'Clientes' },
] as const

export const MODULOS = [
  { codigo: 'pos', area: 'salon', nombre: 'Punto de venta', icono: 'shopping-cart', texto: 'Para el mostrador y el teléfono: buscás, tocás y queda anotado. Sigue andando sin internet y cobra con el QR de Mercado Pago.', datos: ['Sin internet', 'QR de Mercado Pago', 'Celular, tablet o compu'] },
  { codigo: 'mesas', area: 'salon', nombre: 'Mesas y mozos', icono: 'armchair', texto: 'El salón de un vistazo. Cada mozo toma el pedido desde su celular y a la cocina llega sólo lo nuevo.', datos: ['App para mozos', 'Mapa del salón', 'Cuenta por mesa'] },
  { codigo: 'impresion_comandas', area: 'salon', nombre: 'Comandas impresas', icono: 'printer', texto: 'Cada pedido sale impreso en la cocina apenas entra, venga de tu página, del mostrador o de una mesa.', datos: ['Automáticas', 'Cocina y caja', 'Impresora térmica'] },
  { codigo: 'gestion_stock', area: 'gestion', nombre: 'Control de stock', icono: 'package', texto: 'Cargás tus insumos y la receta de cada producto. Cada venta descuenta lo que usó y te avisa antes de quedarte sin nada.', datos: ['Recetas por producto', 'Alertas', 'Gastos'] },
  { codigo: 'gestion_cadetes', area: 'envios', nombre: 'Repartidores', icono: 'bike', texto: 'Asignás cada envío a un cadete, lo ves en el mapa y al cierre sabés cuánto rinde cada uno.', datos: ['Mapa de envíos', 'Rendición', 'Zonas con costo'] },
  { codigo: 'rapiboy', area: 'envios', nombre: 'Rapiboy', icono: 'truck', texto: 'Si no tenés cadetes propios, pedís el envío a Rapiboy desde el mismo pedido.', datos: ['Desde el pedido', 'Sin cargar dos veces'] },
  { codigo: 'mercadopago', area: 'cobros', nombre: 'Mercado Pago', icono: 'credit-card', texto: 'Tus clientes pagan online con tu cuenta de Mercado Pago. La plata va directo a vos, sin pasar por Piru.', datos: ['Tu cuenta', 'Link y QR', 'Sin comisión de Piru'] },
  { codigo: 'talo', area: 'cobros', nombre: 'Transferencias con Talo', icono: 'landmark', texto: 'Tus clientes te transfieren y el pago se confirma solo en el pedido. Nada de pedir el comprobante.', datos: ['Confirmación automática', 'Sin comprobantes'] },
  { codigo: 'facturacion_arca', area: 'gestion', nombre: 'Facturación ARCA', icono: 'receipt-text', texto: 'Emitís la factura electrónica del pedido desde el panel, sin entrar a otro sistema.', datos: ['Factura electrónica', 'Desde el pedido'] },
  { codigo: 'cierre_turno_manual', area: 'salon', nombre: 'Caja por turno', icono: 'calculator', texto: 'Abrís y cerrás la caja de cada turno y ves qué entró por cada medio de pago.', datos: ['Por medio de pago', 'Diferencias'] },
  { codigo: 'multisucursal', area: 'gestion', nombre: 'Varias sucursales', icono: 'building-2', texto: 'Una sola página y una sola carta para todos tus locales. Cada sucursal con sus horarios, sus zonas y su stock.', datos: ['Una página', 'Horarios por local', 'Stock por local'] },
  { codigo: 'crecimiento', area: 'clientes', nombre: 'Campañas y links medidos', icono: 'megaphone', texto: 'Un link para cada historia, reel, QR o influencer. Ves cuántos pedidos cobrados trajo cada uno.', datos: ['Pedidos por link', 'QR para el local'] },
  { codigo: 'codigos_descuento', area: 'clientes', nombre: 'Cupones', icono: 'ticket', texto: 'Promos como MARTES20, con vencimiento y límite de usos, que se aplican solas en el carrito.', datos: ['Vencimiento', 'Límite de usos'] },
  { codigo: 'avisos_automaticos_whatsapp', area: 'clientes', nombre: 'Avisos automáticos por WhatsApp', icono: 'bell-ring', costo: 'Costo por mensaje enviado', texto: 'Tus clientes reciben solos el estado del pedido: confirmado, en camino, listo para retirar. Pagás sólo por los mensajes que se envían.', datos: ['Estado del pedido', 'Con tu marca', 'Pagás por mensaje'] },
  { codigo: 'motor_recompra', area: 'clientes', nombre: 'Retención', icono: 'repeat-2', texto: 'Te dice a quién escribirle, cuándo y qué decirle para que vuelva a pedir. Incluye el club de puntos y las invitaciones de los días flojos.', datos: ['Mensajes de recompra', 'Club de puntos', 'Días flojos'] },
] as const

export const LOCALES = [
  { nombre: 'Che Milanesa', dominio: 'che-milanesa.com', url: 'https://che-milanesa.com', logo: '/chemilanesa.png', fondo: '#000000' },
  { nombre: 'Alfajor con Papas', dominio: 'alfajorconpapas.com', url: 'https://alfajorconpapas.com', logo: '/alfajor.jpeg', fondo: '#ffffff' },
] as const

const ARS = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 })
/** "$40.000": el formato de plata de toda la landing (y el que proponemos para la tienda). */
export const pesos = (n: number) => `$${ARS.format(Math.round(n))}`

/** "$12,2 M": montos grandes en tarjetas chicas. */
export const millones = (n: number) =>
  `$${(n / 1_000_000).toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} M`
