// кнопка перемотки вверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// слайдер
let slaidOne = document.querySelector(".what-say__cards-one-activ")
let slaidTwo = document.querySelector(".what-say__cards-two")
let slaidTree = document.querySelector(".what-say__cards-three")
let btnLeft = document.querySelector(".what-say__actions-left")
let btnRight = document.querySelector(".what-say__actions-right")


// кнопки вперед и назад

btnRight.onclick = function() {
  slaidOne.classList.remove("what-say__cards-one-activ")
  slaidOne.classList.add("what-say__cards-one")
  slaidTwo.classList.remove("what-say__cards-two")
  slaidTwo.classList.add("what-say__cards-two-activ")
}

btnLeft.onclick = function() {
  slaidOne.classList.remove("what-say__cards-one")
  slaidOne.classList.add("what-say__cards-one-activ")
  slaidTwo.classList.remove("what-say__cards-two-activ")
  slaidTwo.classList.add("what-say__cards-two")
}

// блок блогеров
let blogerOne = document.getElementById("bloger-one")
let blogerTwo = document.getElementById("bloger-two")
let blogerThree = document.getElementById("bloger-three")

let newBloger = slaidOne.classList.contains("what-say__cards-one-activ")

if (newBloger === true) {
  blogerOne.classList.replace("what-say__box","what-say__box-none")
}

blogerOne.onclick = function () {
  blogerOne.classList.replace("what-say__box","what-say__box-none") 
  blogerTwo.classList.replace("what-say__box-none","what-say__box")  
  blogerThree.classList.replace("what-say__box-none","what-say__box")   
  slaidOne.classList.replace("what-say__cards-one","what-say__cards-one-activ")
  slaidTwo.classList.replace("what-say__cards-two-activ","what-say__cards-two")  
  slaidTree.classList.replace("what-say__cards-three-activ","what-say__cards-three")
}

blogerTwo.onclick = function () {
  blogerOne.classList.replace("what-say__box-none","what-say__box") 
  blogerTwo.classList.replace("what-say__box","what-say__box-none")  
  blogerThree.classList.replace("what-say__box-none","what-say__box")  
  slaidOne.classList.replace("what-say__cards-one-activ","what-say__cards-one")  
  slaidTwo.classList.replace("what-say__cards-two","what-say__cards-two-activ")    
  slaidTree.classList.replace("what-say__cards-three-activ","what-say__cards-three")
}

blogerThree.onclick = function () {
  blogerOne.classList.replace("what-say__box-none", "what-say__box")  
  blogerTwo.classList.replace("what-say__box-none", "what-say__box") 
  blogerThree.classList.replace("what-say__box","what-say__box-none")  
  slaidTwo.classList.replace("what-say__cards-two-activ", "what-say__cards-two")  
  slaidOne.classList.replace("what-say__cards-one-activ", "what-say__cards-one") 
  slaidTree.classList.replace("what-say__cards-three", "what-say__cards-three-activ")
}
