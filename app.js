console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById("submitSearch")
const searchInput = document.getElementById("searchWord")
const imgGif = document.querySelector("#gif")
const feedBackele = document.getElementById("feedback")

searchButton.addEventListener("click", (Event) => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Uqe6q2p7Gxk0rgD1FY7Hu7hRxfj8bQBo&s=${searchInput.value}`)

  .then((res) => {console.log(res) 
    return res.json()
  })

  .then((parsed) => {
    imgGif.src = parsed.data.images.original.url
    searchInput.value = ""
    feedBackele.textContent = ""

  })

  .catch((err) => {
    console.error(err)
    feedBackele.textContent = err.message
  })
})