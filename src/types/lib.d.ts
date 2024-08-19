declare const ScrollReveal: scrollReveal.ScrollReveal
declare module "scrollreveal"
declare namespace scrollReveal {
  interface RevealOptions {
    interval?: number
    delay?: number
  }

  interface ScrollReveal {
    reveal(elements: HTMLElement | string, options?: RevealOptions): RevealOptions
    destroy(): void
  }
}
