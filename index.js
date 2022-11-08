const showImage = function () {
  const loadImage = document.querySelector(".loadBtn")
  loadImage.addEventListener("click", loadNatureImages)

  const loadCats = document.querySelector(".loadBtn2")
  loadCats.addEventListener("click", loadCatImages)
}

window.onload = () => {
  showImage()
}

const loadNatureImages = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001ddbe4b69e33d427686e11585866daa60"
    }
  }

  fetch("https://api.pexels.com/v1/search?query=nature", options)
    .then((response) => response.json())
    .then((data) => {
      let container = document.querySelector(".firstRow")
      for (let i = 0; i < data.photos.length; i++) {
        container.innerHTML += `<div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src=${data.photos[i].src.original} class="card-img-top" alt="...">
                
                <div class="card-body">
                  <p class="card-text">${data.photos[i].alt}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${data.photos[i].id}</small>
                  </div>
                </div>
              </div>
            </div>`
      }
    })

    .catch((err) => console.error(err))
}

const loadCatImages = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001ddbe4b69e33d427686e11585866daa60"
    }
  }

  fetch("https://api.pexels.com/v1/search?query=cats", options)
    .then((response) => response.json())
    .then((data) => {
      let container = document.querySelector(".secondRow")
      for (let i = 0; i < data.photos.length; i++) {
        container.innerHTML += `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src=${data.photos[i].src.original} class="card-img-top" alt="...">
                  
                  <div class="card-body">
                    <p class="card-text">${data.photos[i].alt}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>`
      }
    })

    .catch((err) => console.error(err))
}

const hidebtn = () => {
  let clickHide = document.querySelectorAll("")
}
