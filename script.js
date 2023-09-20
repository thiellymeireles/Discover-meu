function toggleMode() {
  const html = document.querySelector("html")
  html.classList.toggle("light")
  /* if(html.classList.constains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imgem
  if (html.classList.contains("light")) {
    //se tiver light mode, adcinionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  console.log(html)
}
