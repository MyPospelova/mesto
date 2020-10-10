const popupUser = document.querySelector('.js-popupuser');
let inputName = document.getElementsByName('username')[0];
let inputDescription = document.getElementsByName('profession')[0];
let titleElement = document.querySelector('.profile-info__title');
let subtitleElement = document.querySelector('.profile-info__subtitle');
//заполняем поля формы инофрмацией о пользователе
let title = titleElement.innerHTML;
let subtitle = subtitleElement.innerHTML;

inputName.value = title;
inputDescription.value = subtitle;
//Модальное окно
let showPopup = function (elementPopup) {
  elementPopup.classList.add('popup_opened');
}
let hidePopup = function (elementPopup) {
  elementPopup.classList.remove('popup_opened');
}
//информация о пользователе
let saveData = function (event) {
  event.preventDefault();
  subtitleElement.innerHTML = inputDescription.value
  titleElement.innerHTML = inputName.value
  hidePopup(popupUser);
}
let showPopupButton = document.querySelector('.profile-info__edit-button');
showPopupButton.addEventListener('click', () => showPopup(popupUser));
let hidePopupButton = popupUser.querySelector('.popup__closed');
hidePopupButton.addEventListener('click', () => hidePopup(popupUser));
let popupUserForm = document.getElementsByName('popup-user-form')[0];
popupUserForm.addEventListener('submit', saveData);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1597410010355-cbb0accd8b3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80'
  },
  {
    name: 'Греция',
    link: 'https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80'
  },
  {
    name: 'Кабардино-Балкария',
    link: 'https://images.unsplash.com/photo-1596713268950-400b34bd6fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  },
  {
    name: 'Фуэртевентура',
    link: 'https://images.unsplash.com/photo-1596095763180-1ba53ee7518e?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function getCardTemplate(name, link) {
  const gallery = document.querySelector('.elements-grid');
  const cardTemplate = document.querySelector('#cardtemplate').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.grid-item__image').src = link;
  cardElement.querySelector('.grid-item__image').alt = name;
  cardElement.querySelector('.grid-item__text').textContent = name;
  gallery.prepend(cardElement);
  return cardElement;
}
//заполняем страницу карточками при загрузке 
initialCards.forEach((item) => {
  getCardTemplate(item.name, item.link);
})

//форма с местом
const popupPlace = document.querySelector('.js-popupplace');
const showPopupAddButton = document.querySelector('.profile-info__add-button');
showPopupAddButton.addEventListener('click', () => showPopup(popupPlace));
const hidePopupAddButton = popupPlace.querySelector('.popup__closed');
hidePopupAddButton.addEventListener('click', () => hidePopup(popupPlace));

const createPlace = function (event) {
  event.preventDefault();
  const inputPlaceName = document.getElementsByName('placename')[0];
  const inputPlaceLink = document.getElementsByName('placelink')[0];
  const name = inputPlaceName.value;
  const link = inputPlaceLink.value;
  const cardElement = getCardTemplate(name, link);


  const buttonTrash = document.querySelector('.grid-item__trash');
  buttonTrash.addEventListener('click', trashListener);

  const buttonLike = document.querySelector('.grid-item__like');
  buttonLike.addEventListener('click', likeListener);

  const buttonPicture = document.querySelector('.grid-item__image');
  buttonPicture.addEventListener('click', pictureListener);

  hidePopup(popupPlace);
}
const popupPlaceForm = document.getElementsByName('popup-place-form')[0];
popupPlaceForm.addEventListener('submit', createPlace);


//ставим лайки
const likeButtons = document.querySelectorAll('.grid-item__like');
const likeListener = function () {
  this.classList.toggle('grid-item__like_active')
}
likeButtons.forEach(button => {
  button.addEventListener('click', likeListener);
});

//удаляем карточку
const trashButtons = document.querySelectorAll('.grid-item__trash');
const trashListener = function () {
  const listItem = this.closest('.grid-item');
  listItem.remove();
}
trashButtons.forEach(button => {
  button.addEventListener('click', trashListener);
});


//открываем картинку в попапе
const previewButtons = document.querySelectorAll('.grid-item__image');
const popupPicture = document.querySelector('.popup__picture');
const hidePopupPictureButton = popupPicture.querySelector('.popup__closed');
const pictureListener = function (event) {
  const imageInPopup = document.getElementById('popupImageId');
  imageInPopup.src = this.src;
  imageInPopup.alt = this.alt;
  const textInPopup = document.querySelector('.popup__text');
  textInPopup.innerHTML = this.alt;
  showPopup(popupPicture);
}
hidePopupPictureButton.addEventListener('click', () => hidePopup(popupPicture));
previewButtons.forEach(button => {
  button.addEventListener('click', pictureListener);
});