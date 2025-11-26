import { photos } from '../js/thumbnails.js';
import { clearComments, renderComments } from '../js/render-comments.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCaption = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

function onBigPictureCancelClick(evt) {
  evt.preventDefault();
  closeBigPicture();
}

function onEscKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeBigPicture();
  }
}

function closeBigPicture() {
  clearComments();

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
}

const openBigPicture = (pictureId) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));


  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentsCaption.textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);


  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.addEventListener('keydown', onEscKeydown);

};
export { openBigPicture };
