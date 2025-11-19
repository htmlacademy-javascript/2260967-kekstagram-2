import { getRandomInteger, getUniqueId, getRandomArrayElement } from '../js/util.js';
import * as Lib from '../js/data.js';

const commentsArray = function () {
  const usedCommentIds = [];
  return {
    id: getUniqueId(1, 999, usedCommentIds),
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
const usedPhotoIds = [];
const userPhoto = function () {
  const id = getUniqueId(1, 25, usedPhotoIds);
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
    photos.push(userPhoto());
  }

  return photos;
};


export { createUserPhotos };
