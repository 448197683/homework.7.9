const spaN = document.getElementById('sp')
const zhunX = document.getElementById('zhunxing')
const lineX = document.getElementById('linex')
const lineY = document.getElementById('liney')
spaN.style.color = `white`

document.addEventListener(`mousemove`, function (e) {
  console.log(`x=${e.clientX},y=${e.clientY}`)
  sp.innerText = `x=${e.clientX},y=${e.clientY}`
  sp.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
  zhunX.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  lineX.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  lineY.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;

})


