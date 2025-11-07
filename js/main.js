const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const usedCommentIds = [];
const usedPhotoIds = [];

const getUniqueId = (min, max, usedIds) => {
  let id;

  do {
    id = getRandomInteger(min, max);
  } while (usedIds.includes(id));

  usedIds.push(id);
  return id;
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const descriptions = [
  'Я на пляже',
  'Я с собакой',
  'Парк-это круто',
  'Пью кофе',
];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Егор',
  'Дамир',
  'Дмитрий',
  'Алиса',
  'Никита',
  'Глеб',
  'Лев',
];
const commentsArray = function () {
  return {
    id: getUniqueId(1, 999, usedCommentIds),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names),
  }
}
const generateComments = function () {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(commentsArray());
  }
  return comments;
};
const userPhoto = function () {
  const id = getUniqueId(1, 25, usedPhotoIds);
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
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
