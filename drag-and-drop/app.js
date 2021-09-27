const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")

item.addEventListener("dragstart", function (e) {
  const target = e.target
  target.classList.add("hold")

  setTimeout(() => {
    target.classList.add("hide")
  }, 0)
})

item.addEventListener("dragend", function (e) {
  const target = e.target

  target.className = "item"
})

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", function (e) {
    e.preventDefault()
  })

  placeholder.addEventListener("dragenter", function (e) {
    const target = e.target
    target.classList.add("hovered")
  })

  placeholder.addEventListener("dragleave", function (e) {
    const target = e.target
    target.classList.remove("hovered")
  })

  placeholder.addEventListener("drop", function (e) {
    const target = e.target

    target.classList.remove("hovered")
    target.append(item)
  })
})
