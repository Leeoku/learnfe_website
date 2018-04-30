const slidesSet = [
  {
    text: 'Learn Front-End & JavaScript Development',
    img: 'assets/slider/001.jpg'
  }
];

function findTitle(front, end) {
  return `learn${front[randomInteger(front.length - 1, 0)]}${end[randomInteger(end.length - 1, 0)]}`;
}

function createSlides(slides) {
  const target = document.getElementById('slider');

  slides.map((slide, index) => {
    let slideContainer = document.createElement('div');
    slideContainer.className = 'slides fade';

    let image = document.createElement('img');
    image.setAttribute('src', slide.img);
    slideContainer.appendChild(image);

    let text = document.createElement('p');
    text.className = 'fade-in';
    text.innerText = slide.text;

    slideContainer.appendChild(text);

    target.appendChild(slideContainer);
  });
}

(function(){
  createSlides(slidesSet);
  renderMembers()
})();
