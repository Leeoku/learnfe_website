function randomInteger(max, min) {
  return Math.floor((Math.random() * max) + min);
}

const frontWords = [
  'Front',
  'Fall',
  'Free',
  'For',
  'Fallout',
  'Forever'
];

const endWords = [
  'End',
  'Everest',
  'Ever',
  'Evil',
  'Ernesto',
  'Event'
];

const slidesSet = [
  {
    text: 'Test',
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

    let slideIndex = document.createElement('span');
    slideIndex.innerText = `${index + 1}/${slides.length}`;
    slideIndex.className = 'slide-counter fade-out';
    text.appendChild(slideIndex);

    slideContainer.appendChild(text);

    target.appendChild(slideContainer);
  });
}

(function(){
  const title = document.getElementById('title');
  title.innerText = findTitle(frontWords, endWords);
  createSlides(slidesSet);
})();
