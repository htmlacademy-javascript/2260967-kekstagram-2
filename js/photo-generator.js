import { getRandomInteger, getUniqueId, getRandomArrayElement } from '../js/util.js';
import * as Lib from '../js/data.js';

const commentsArray = function () {
  return {
    id: getUniqueId(1, 999, Lib.usedCommentIds),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(Lib.messages),
    name: getRandomArrayElement(Lib.names),
  };
};
const generateComments = function () {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(commentsArray());
  }
  return comments;
};
const userPhoto = function () {
  const id = getUniqueId(1, 25, Lib.usedPhotoIds);
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(Lib.descriptions),
    likes: getRandomInteger(15, 200),
    comments: generateComments(),
  };
};
const createUserPhotos = function (count) {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    photos.push(userPhoto(i));
  }

  return photos;
};
createUserPhotos(25);
