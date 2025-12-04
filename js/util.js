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
const REMOVE_MESSAGE_TIMEOUT = 5000;
const body = document.body;


const errorTemplate = document.querySelector('#data-error');

export const showErrorMessage = (message) => {
  if (!errorTemplate) {
    console.error('Error template not found. Message:', message);
    return;
  }

  const errorArea = errorTemplate.content.querySelector('.data-error').cloneNode(true);

  if (message) {
    const titleEl = errorArea.querySelector('.data-error__title');
    if (titleEl) titleEl.textContent = message;
  }

  body.append(errorArea);

  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(() => {
    if (errorLoadDataArea) errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};
function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}
function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
export {debounce};
