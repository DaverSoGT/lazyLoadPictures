export let count = {
  image: 0,
  charged: 0
}

export const printState = () => {
  console.log(`⚪ Image in page: ${count.image}`)
  console.log(`🟢 Images charged: ${count.charged}`)
} 

const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target
  const image = container.querySelector('img')
  const url = image.dataset.src
  //image.src = `https://randomfox.ca/images/${random()}.jpg`
  image.src = url
  count.charged++
  printState()
  //console.log(`🟢 Images charged: ${count.charged++}`)

  observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  //IntersectionObserver -> observer image
  observer.observe(image)
}