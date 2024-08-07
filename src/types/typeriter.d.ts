declare module "typewriter-effect/dist/core" {
  interface TypewriterOptions {
    strings?: string[]
    cursor?: string
    delay?: number
    autoStart?: boolean
    loop?: boolean
    wrapperClassName?: string
    cursorClassName?: string
  }

  class Typewriter {
    constructor(container: HTMLElement | string, options?: TypewriterOptions)

    typeString(string: string): Typewriter
    pauseFor(duration: number): Typewriter
    deleteAll(speed?: number): Typewriter
    callFunction(any): Typewriter
    start(): void
  }

  export default Typewriter
}
