/**
 * Grillas de tarjetas que en celular y tablet son un carrusel deslizable (para no alargar la página)
 * y en escritorio una grilla. Las usa "Tu marketing" (Marketing.astro). Las columnas de escritorio las pone cada sección.
 */
export const CARRUSEL =
  'sin-barra -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:snap-none lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0'

/** Cada tarjeta del carrusel: casi todo el ancho en celular, para que asome la siguiente. */
export const TARJETA_CARRUSEL = 'w-[86vw] max-w-[440px] shrink-0 snap-center lg:w-auto lg:max-w-none'

/** La pista de que hay más, debajo del carrusel (sólo donde es carrusel). */
export const DESLIZA = 'mt-3 flex items-center justify-center gap-1.5 text-[13px] text-ink-3 lg:hidden'
