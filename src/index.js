import { registerImage, count, printState } from "./lazy"
// create a image
// add #image

const createImageNode = () => {
  const container = document.createElement('div')
  container.className = 'p-4'

  const image = document.createElement('img')
  image.className = 'mx-auto'
  image.width = '320'
  image.dataset.src = 'https://source.unsplash.com/random?technology'
  
  const loadingImage = document.createElement('div')
  loadingImage.className = 'bg-gray-300'
  loadingImage.style.minHeight = '180px'
  loadingImage.style.display = 'inline-block'

  loadingImage.appendChild(image)
  container.appendChild(loadingImage)

  return container
}

const mountNode = document.getElementById('images')

const addButton = document.getElementById('addButton')
const cleanButton = document.getElementById('cleanButton')

const addImage = () => {
  const newImage = createImageNode()
  mountNode.append(newImage)
  registerImage(newImage)
  count.image++
  printState()
}

const deleteImages = () => {
  while (mountNode.firstChild) mountNode.removeChild(mountNode.firstChild)
  console.clear()
  count.image = 0
  count.charged = 0
}

addButton.addEventListener('click', addImage)
cleanButton.addEventListener('click', deleteImages)