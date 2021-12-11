console.log("hey");
// Responsive navbar
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElt = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-in");
      elt.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElt.forEach(function (elt) {
      elt.classList.remove("fade-out");
      elt.classList.add("fade-in");
    });
  }
});

// Carousel of Company
function Carousel(options){
  var elem = this.elem = options.elem;
  this.carousel = document.getElementById('carousel');
  this.ulList = document.querySelector('ul');
  this.liList = document.querySelector('li');
  this.position = 0;
  this.width = 263;

  elem.getElementsByClassName('prev')[0].onclick = this.leftButtonClick.bind(this);
  elem.getElementsByClassName('next')[0].onclick = this.rightButtonClick.bind(this);
};

Carousel.prototype.leftButtonClick = function(){
  var self = this;
  console.log(this.position + '!!');
  if (this.position >= 0) {console.log('-1')} else {
    console.log(this.position);
    this.position = this.position + this.width;
    console.log(this.position);
    this.ulList.style.marginLeft = this.position + 'px'};
  console.log(this.position);

};

Carousel.prototype.rightButtonClick = function(){
  var self = this;
  var numberOfItems = 8;

  if (this.position <= -numberOfItems * 263) {console.log('-1')} else {
    this.position = this.position - this.width;
    this.ulList.style.marginLeft = this.position + 'px'
    console.log(this.position)};
};

var carous = new Carousel({
  elem: document.getElementById('carousel')
});


// Realization link
const allLinks = document.querySelector(".css-filter--link");