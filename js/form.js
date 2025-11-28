export const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const editingForm = uploadForm.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const imageCloseButton = document.querySelector('.img-upload__cancel');
const imageOpenButton = document.querySelector('#upload-file');

const SCALE_STEP = 0.25;
let scale = 1;
const img = uploadForm.querySelector('.img-upload__preview img');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const smaller = uploadForm.querySelector('.scale__control--smaller');
const bigger = uploadForm.querySelector('.scale__control--bigger');
/*1.2. Выбор изображения для загрузки осуществляется с помощью стандартного контрола загрузки файла
 .img-upload__input, который стилизован под букву «О» в логотипе.
 После выбора изображения (изменения значения поля .img-upload__input),
 показывается форма редактирования изображения.
 У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open.*/

imageOpenButton.addEventListener('click', openPhotoEditor);

const onImageCloseButtonClick = () => {
  closePhotoEditor();
};
const onEscKeydown = (evt) => {
  if ((evt.key === 'Escape' || evt.key === 'Esc')
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

function openPhotoEditor() {
  uploadInput.addEventListener('change', () => {
    editingForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    imageCloseButton.addEventListener('click', onImageCloseButtonClick);
    document.addEventListener('keydown', onEscKeydown);
  });

}
/* 1.3 Закрытие формы редактирования изображения производится либо нажатием на кнопку .img-upload__cancel,
 либо нажатием клавиши Esc. Элементу .img-upload__overlay возвращается класс hidden.
  У элемента body удаляется класс modal-open.*/

function closePhotoEditor() {
  editingForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  imageCloseButton.removeEventListener('click', onImageCloseButtonClick);
  document.removeEventListener('keydown', onEscKeydown);
  uploadInput.value = '';
}
/* Напишите код, который позволит пользователю редактировать масштаб изображения.
Кроме визуального применения эффекта необходимо записывать значение в поле формы с масштабом, доступное
 только для чтения, для дальнейшей отправки на сервер.*/
const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};
const onBiggerClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};
smaller.addEventListener('click', onSmallerClick);
bigger.addEventListener('click', onBiggerClick);
