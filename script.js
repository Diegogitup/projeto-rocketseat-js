function toggleMode() {
  const html = document.documentElement

  // para simplificar basta usar a função toggle (tógou)
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  const img = document.querySelector("#profile img")
  // SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    // se iver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de perfiel durante o dia e com sol, onde diego esta com óculos escuros camiseta branca"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfiel do Diego da silva")
  }
}
