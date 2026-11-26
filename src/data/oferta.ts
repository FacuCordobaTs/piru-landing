/**
 * Todo lo comercial que la landing promete, en un solo lugar.
 *
 * Los precios son espejo del catálogo (MySQL): la fuente de verdad es la base, no este archivo.
 * Desde el 23 de noviembre de 2026 la landing vende los planes de tienda (`plan_tienda`,
 * `backend/migrations/add_planes_tienda.sql`, ver docs/PLANES_TIENDA.md): Inicial gratis, Esencial,
 * Impulso, Escala y Evolución a medida. El alta es self-serve (`CREAR_TIENDA`). Los locales que ya
 * existían siguen en Evolución con su suscripción de siempre: la landing no la publica.
 * Si cambia un precio o un plan en la base, cambialo acá también (`PLANES`).
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

/**
 * Registro self-serve ("Crear tienda gratis", plan Inicial) en el panel. Ver docs/PLANES_TIENDA.md.
 * `?email=` precarga el mail.
 */
export const CREAR_TIENDA = 'https://admin.piru.app/crear-tienda'
export const ENTRAR = 'https://admin.piru.app/login'

export const TEXTO_WA_EVOLUCION = 'Hola! Quiero saber más del plan Evolución de Piru.'

/**
 * Espejo de `plan_tienda` (precio mensual, descuento anual, beneficios). `precio` null = a medida.
 * `destacado` marca el recomendado. El reparto de módulos por plan está en docs/PLANES_TIENDA.md.
 */
export const PLANES = [
  {
    codigo: 'inicial', nombre: 'Inicial', precio: 0, descuentoAnual: 0, destacado: false,
    descripcion: 'Tu tienda online con pedidos a tu WhatsApp, sin pagar nada.',
    beneficios: ['Pedidos y productos ilimitados', 'Tienda online con el diseño de Piru', 'Pedidos directo a tu WhatsApp', 'Cobros con Mercado Pago, efectivo y transferencia', 'Impresión de comandas', 'Lista de clientes y estadísticas básicas'],
  },
  {
    codigo: 'esencial', nombre: 'Esencial', precio: 19999, descuentoAnual: 20, destacado: false,
    descripcion: 'Tu marca y tu diseño: elegí una plantilla y hacela tuya.',
    beneficios: ['Todo lo del plan Inicial', 'Elegí una plantilla y personalizala', 'Punto de venta y cierre de caja', 'Cupones de descuento', 'Club de puntos', 'Cobros con Talo'],
  },
  {
    codigo: 'impulso', nombre: 'Impulso', precio: 39999, descuentoAnual: 20, destacado: true,
    descripcion: 'Diseño libre en código y todo para que tus clientes vuelvan.',
    beneficios: ['Todo lo del plan Esencial', 'Descargá y editá el código de tu página', 'Mesas, stock y cadetes', 'Recompra, días flojos y campañas', 'Avisos automáticos por WhatsApp', 'Facturación electrónica ARCA'],
  },
  {
    codigo: 'escala', nombre: 'Escala', precio: 79999, descuentoAnual: 20, destacado: false,
    descripcion: 'Para locales que crecen: varias sucursales y estadísticas avanzadas.',
    beneficios: ['Todo lo del plan Impulso', 'Estadísticas avanzadas', 'Varias sucursales'],
  },
  {
    codigo: 'evolucion', nombre: 'Evolución', precio: null, descuentoAnual: 0, destacado: false,
    descripcion: 'Una tienda a medida, con el equipo de Piru al lado.',
    beneficios: ['Todo lo del plan Escala', 'Tienda a medida en su propio repositorio', 'Desarrollos propios', 'Acompañamiento directo del equipo de Piru', 'Precio a medida'],
  },
] as const

/**
 * La tabla comparativa de Precios: qué trae cada plan, en el orden de `PLANES`. `true` es un tilde,
 * `false` una raya y un texto se muestra tal cual. Es el reparto de docs/PLANES_TIENDA.md: si cambia
 * un módulo de plan, cambia acá.
 */
export const TABLA_PLANES: { grupo: string; filas: { nombre: string; planes: (boolean | string)[] }[] }[] = [
  {
    grupo: 'Tu tienda',
    filas: [
      { nombre: 'Pedidos y productos', planes: ['Ilimitados', 'Ilimitados', 'Ilimitados', 'Ilimitados', 'Ilimitados'] },
      { nombre: 'Comisión por venta', planes: ['0%', '0%', '0%', '0%', '0%'] },
      { nombre: 'Diseño', planes: ['Plantilla Sencilla', 'Plantillas + editor', 'Editor + código', 'Editor + código', 'A medida'] },
      { nombre: 'Pedidos a tu WhatsApp', planes: [true, true, true, true, true] },
      { nombre: 'Repositorio propio y desarrollos a medida', planes: [false, false, false, false, true] },
    ],
  },
  {
    grupo: 'Cobros',
    filas: [
      { nombre: 'Mercado Pago, transferencia y efectivo', planes: [true, true, true, true, true] },
      { nombre: 'Transferencias que se confirman solas', planes: [false, true, true, true, true] },
    ],
  },
  {
    grupo: 'Tu local',
    filas: [
      { nombre: 'Panel de pedidos e impresión de comandas', planes: [true, true, true, true, true] },
      { nombre: 'Punto de venta y cierre de caja', planes: [false, true, true, true, true] },
      { nombre: 'Mesas, stock y cadetes', planes: [false, false, true, true, true] },
      { nombre: 'Facturación electrónica ARCA', planes: [false, false, true, true, true] },
      { nombre: 'Varias sucursales', planes: [false, false, false, true, true] },
      { nombre: 'Estadísticas', planes: ['Básicas', 'Básicas', 'Básicas', 'Avanzadas', 'Avanzadas'] },
    ],
  },
  {
    grupo: 'Que vuelvan',
    filas: [
      { nombre: 'Lista de clientes', planes: [true, true, true, true, true] },
      { nombre: 'Cupones y club de puntos', planes: [false, true, true, true, true] },
      { nombre: 'Recompra, días flojos y campañas', planes: [false, false, true, true, true] },
      { nombre: 'Avisos automáticos por WhatsApp', planes: [false, false, 'Por mensaje', 'Por mensaje', 'Por mensaje'] },
      { nombre: 'Acompañamiento del equipo de Piru', planes: [false, false, false, false, true] },
    ],
  },
]

/** El plan más barato con precio (para "desde $…"). */
export const PRECIO_DESDE = Math.min(...PLANES.flatMap((p) => (p.precio ? [p.precio] : [])))
/** El plan que la calculadora compara contra las apps: el que trae casi todas las herramientas. */
export const PLAN_CALCULADORA = PLANES.find((p) => p.codigo === 'impulso')!

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
    fondo: '#083821',
    tinta: '#f2eee2',
  },
  {
    nombre: 'Che Milanesa',
    dominio: 'che-milanesa.com',
    url: 'https://che-milanesa.com',
    texto: 'Negro, amarillo y una tipografía que se lee desde lejos. La portada vende las promos de la semana y los puntos que suma cada pedido.',
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
    clave: 'sencilla',
    nombre: 'Sencilla',
    para: 'La del plan gratis',
    texto: 'Tu logo, la carta en tarjetas con fotos grandes y nada que distraiga. Para empezar a vender hoy.',
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
 * landing. Qué plan incluye cada uno está en docs/PLANES_TIENDA.md; `costo` es lo que se paga
 * aparte y se muestra en su tarjeta (hoy, sólo los avisos automáticos, por mensaje enviado).
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
