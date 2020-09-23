const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = images.map(image => {
  const itemEl = document.createElement(`li`);

  const imageEl = document.createElement(`img`);
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.height = 200;

  itemEl.appendChild(imageEl);

  return itemEl;
});

const gallery = document.querySelector(`#gallery`);

gallery.append(...galleryItems);

gallery.style.display = `flex`;
gallery.style.flexWrap = `wrap`;
gallery.style.justifyContent = `space-around`;
gallery.style.listStyle = `none`;
