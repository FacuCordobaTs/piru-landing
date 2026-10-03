/** Las pantallas que puede mostrar un paso de ComoFunciona.astro (ver PantallaPaso.astro). */
export type ClavePantalla =
  | 'menu' | 'producto' | 'pago' | 'panel' | 'cliente' | 'whatsapp'
  | 'historia' | 'whatsapp-pedido' | 'campanas-app'

export interface Paso {
  titulo: string
  texto: string
  pantalla: ClavePantalla
  /** Etiqueta chica debajo del título, para lo que depende de un adicional (p. ej. "Con Retención"). */
  modulo?: string
}
