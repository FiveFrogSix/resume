import type { RouterLink } from "./route"
import type { FA } from "./faIcon"
interface Menu {
  route: RouterLink
  text?: string
  icon?: string
  faIcon?: FA
}

export type { Menu }
