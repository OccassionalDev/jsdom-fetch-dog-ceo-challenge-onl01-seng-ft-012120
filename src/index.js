console.log('%c HI', 'color: firebrick');

// Challenge 1

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
  fetch(imgUrl)
    .then(resp=> resp.json())
    .then(result => {
      result.message.forEach(image => addImage(image))
    });
}
