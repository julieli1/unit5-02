//creates alert
document.getElementById('button').addEventListener('click', displayMessage)
function displayMessage () {
  alert('hello')
}

//changes the font of "Julie Li"
document.getElementById('font').addEventListener('click', changeFont)
function changeFont () {
  document.getElementById('name').style.fontFamily = 'Brush-Script-MT ,cursive'
}

//changes the size of "Julie Li"
document.getElementById('size').addEventListener('click', changeSize)
function changeSize () {
  document.getElementById('name').style.fontSize = '150%'
}

//changes color of "Julie Li"
document.getElementById('color').addEventListener('click', changeColor)
function changeColor () {
  document.getElementById('name').style.color = 'green'
}