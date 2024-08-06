const ColorMode = (color: string = "light") => {
  const htmlElement: HTMLElement = document.documentElement
  localStorage.setItem("_color", color)
  htmlElement.setAttribute("data-bs-theme", color)
}

const Loading = () => {
  const elem = document.querySelector("#loading") as HTMLDivElement
  if (elem?.classList.contains("show")) {
    elem.classList.remove("show")
  } else {
    elem.classList.add("show")
  }
}

export { ColorMode, Loading }
