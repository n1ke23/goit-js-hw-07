"use strict";

// let list_2 = document.querySelector('#categories'); // node list
let list_1 = document.getElementsByClassName('categories-list'); // HTML colections []

//  console.log(list_1);
// Array.from(list_1)
// console.log(Array.from(list_1));
// console.log([... list_1]);
// console.log(list_1.length);
// console.log(list_2);


let list_3 = document.querySelectorAll('.item');
let totalCategoriesCaunt = list_3.length;
// console.log(list_3.length);


// console.log(`в списке ${totalCategoriesCaunt} категорий`);
list_3.forEach((elem, index) => {
  let h2 = document.querySelectorAll('h2');
  let li = document.querySelectorAll('li.item ul');
  console.log(`Количество элементов: ${h2[index].textContent}`);
  console.log(`Категория: ${name}`);
  
})
