function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  
  if(html.classList.contains('light')) {
  // se tiver light mode, add a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter a imagem atual
    img.setAttribute('src', './assets/avatar.png')

    const alt = document.querySelector("alt")
    if(html.classList.contains('light')) {
      alt.setAttribute('alt', "Foto de mayke brito sorrindo, usando óculos de sol, camisa e jaqueta preta, sem barba com fundo degradê em roxo e azul claro")
      
    } else {
      alt.setAttribute('alt', "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
    }
  }



 
  
  
  

 /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add ('light')
  }*/

}