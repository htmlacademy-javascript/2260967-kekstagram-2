const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

export const container = document.querySelector('.pictures');
import { getData } from './api';
export const photos = await getData();
const createThumbnail = (photo) => {
  const thumbnail = templateFragment.cloneNode(true);
  thumbnail.dataset.pictureId = photo.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  return thumbnail;
};
const fragment = document.createDocumentFragment();
photos.forEach((photo) => {
  const thumbnail = createThumbnail(photo);
  fragment.appendChild(thumbnail);
});
container.appendChild(fragment);
