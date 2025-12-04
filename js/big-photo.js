import { clearComments, renderComments } from './render-comments.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCaption = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
let photos = [];

export const setPhotos = (data) => {
  photos = Array.isArray(data) ? data : [];
};

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
  document.addEventListener('keydown', onEscKeydown);
};

export { openBigPicture, closeBigPicture };
