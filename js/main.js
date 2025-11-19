import './photo-generator.js';
import './thumbnails.js';
import { container } from './thumbnails.js';
import { openBigPicture } from './big-photo.js';

container.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});
