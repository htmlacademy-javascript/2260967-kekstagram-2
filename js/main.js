import './form.js';
import { container, renderThumbnails } from './thumbnails.js';
import { openBigPicture, setPhotos } from './big-photo.js';
import { getData } from './api.js';
import './hastag-validity.js';
import './slider.js';
import './form-submit-notifications.js';
import { showErrorMessage } from './util.js';
import { configFilter } from './filter.js';

container.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});

const bootstrap = async () => {
  try {
    const photos = await getData();
    setPhotos(photos);
    configFilter(photos);
    renderThumbnails(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

