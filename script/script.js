let popup = document.querySelector('.popup');
let inputName = document.getElementsByName('username')[0];
let inputDescription = document.getElementsByName('profession')[0];
let titleElement = document.querySelector('.profile-info__title');
let subtitleElement = document.querySelector('.profile-info__subtitle');
let showPopup = function () {
  popup.classList.add('popup_opened');


  let title = titleElement.innerHTML;
  let subtitle = subtitleElement.innerHTML;

  inputName.value = title;
  inputDescription.value = subtitle;
}
let hidePopup = function () {
  popup.classList.remove('popup_opened');
}
let saveData = function (event) {
  event.preventDefault();
  subtitleElement.innerHTML = inputDescription.value
  titleElement.innerHTML = inputName.value
  hidePopup();
}
let showPopupButton = document.querySelector('.profile-info__edit-button');
showPopupButton.addEventListener('click', showPopup);
let hidePopupButton = document.querySelector('.popup__closed');
hidePopupButton.addEventListener('click', hidePopup);
let popupForm = document.getElementsByName('popup-form')[0];
popupForm.addEventListener('submit', saveData);
