function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
      img.setAttribute("src", "./assets/Avatar escuro.png")
    } else {
       img.setAttribute("src", "./assets/Avatar claro.png")
    }


}
