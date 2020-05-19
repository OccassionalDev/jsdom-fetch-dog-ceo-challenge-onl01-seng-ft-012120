console.log('%c HI', 'color: firebrick');

// Setup on load 
document.addEventListener('DOMContentLoaded', function () {
  
}


// Challenge 1

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
  fetch(imgUrl)
    .then(resp=> resp.json())
    .then(result => {
      result.message.forEach(image => addImage(image))
    });
}
