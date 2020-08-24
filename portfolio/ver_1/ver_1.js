function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  /* CSS and JS https://stackoverflow.com/questions/48363099/how-to-darken-a-css-background-image-but-keep-area-around-cursor-brighter

:root {  cursor: none;
    --cursorX: 50vw;
    --cursorY: 50vh;
  }
:root::before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    pointer-events: none;
    background: radial-gradient(
    circle 80vmax at var(--cursorX) var(--cursorY),
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,.5) 80%,
    rgba(0,0,0,.95) 100%
  )
}*/