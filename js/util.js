export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getUniqueId = (min, max, usedIds) => {
  const id = getRandomInteger(min, max);
  if (usedIds.includes(id)) {
    return getUniqueId(min, max, usedIds);
  }
  usedIds.push(id);
  return id;
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
