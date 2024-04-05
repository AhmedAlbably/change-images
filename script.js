// ! in this app we will create app when we clicked on the button put the image we clicked on it to the div show

// * first step get the main elements from the html document
let images = document.querySelectorAll(".images img");
let show = document.getElementById("show");
// * second step when we click on the image show this image we clicked on it in the div show
images.forEach((image) => {
  image.onclick = () => {
    show.innerHTML = image.outerHTML; 
  };
});
