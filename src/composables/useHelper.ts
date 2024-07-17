const ColorMode = (color: string = "light") => {
  const htmlElement: HTMLElement = document.documentElement
  localStorage.setItem("_color", color)
  htmlElement.setAttribute("data-bs-theme", color)
}

export { ColorMode }
