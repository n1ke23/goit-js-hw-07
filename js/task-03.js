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


const list_gallery = document.getElementById('#gallery');
images.forEach((elem, index) => {
  const listGallery = document.getElementById("gallery");
  const itemGallery = `<li id="${index+=1}"><img src="${elem.url}" alt="${elem.alt}" width="200"></li>`;
  listGallery.insertAdjacentHTML("beforeend", itemGallery);
  console.log(listGallery);
  });
//   const ingredientItem = document.createElement('li');
//   ingredientItem.textContent = elem;
//   ingredientsList.append(ingredientItem);
//   console.log(ingredientItem);