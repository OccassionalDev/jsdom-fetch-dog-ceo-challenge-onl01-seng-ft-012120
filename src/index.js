console.log('%c HI', 'color: firebrick');

// Setup on load 
document.addEventListener('DOMContentLoaded', function () {
  loadImages();
});


// Challenge 1

function addImage(url) {
  let container = document.querySelector('#dog-image-container');
  let newImage = document.createElement('img');
  newImage.src = url;
  container.appendChild(newImage);
}

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}