const sliderArr = [
  
  "https://cms-contents.pharmeasy.in/banner/9540ad39b1e-WEBPDP.jpg?dim=1440x0",
  

];

let imgSlider = document.getElementById("mainSlider");

let imgSlide = document.createElement("img");
imgSlider.append(imgSlide);

imgSlide.src = sliderArr[0];
console.log(imgSlide);

let i = 0;
setInterval(function () {
  if (i == sliderArr.length) {
    i = 0;
  }
  imgSlide.src = sliderArr[i++];
}, 2500);
