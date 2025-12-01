import './photo-generator.js';
import './thumbnails.js';
import './form.js';
import { container } from './thumbnails.js';
import { openBigPicture } from './big-photo.js';
import './hastag-validity.js';
import './slider.js';
container.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});
