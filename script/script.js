const popup = document.querySelector('.popup');
const inputName = document.getElementsByName('username')[0];
const inputDescription = document.getElementsByName('profession')[0];
const titleElement = document.querySelector('.profile-info__title');
const subtitleElement = document.querySelector('.profile-info__subtitle');
const showPopup = function () {
  popup.classList.add('popup_opened');


  const title = titleElement.innerHTML;


  const subtitle = subtitleElement.innerHTML;


  inputName.value = title;


  inputDescription.value = subtitle;
}
const hidePopup = function () {
  popup.classList.remove('popup_opened');
}
const saveData = function (event) {
  event.preventDefault();
  subtitleElement.innerHTML = inputDescription.value
  titleElement.innerHTML = inputName.value
  hidePopup();
}


