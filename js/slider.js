import { styleFilterByEffects, Effects } from './data.js';
const EFFECT_LEVEL_MAX = 100;

// Элементы формы
const uploadForm = document.querySelector('.img-upload__form');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
const effectRadioBtns = uploadForm.querySelectorAll('.effects__radio');

// Масштаб
const scaleValueInput = uploadForm.querySelector('.scale__control--value');

// Текущий класс эффекта
let currentEffectClass = 'effects__preview--none';

// Функция получения CSS-класса эффекта
const getEffectClass = (effect) => ({
  none: 'effects__preview--none',
  chrome: 'effects__preview--chrome',
  sepia: 'effects__preview--sepia',
  marvin: 'effects__preview--marvin',
  phobos: 'effects__preview--phobos',
  heat: 'effects__preview--heat',
}[effect]);

// Сброс фильтра и масштаба
const resetFilter = () => {
  imgPreview.style.filter = '';
  imgPreview.style.transform = 'scale(1)';
  scaleValueInput.value = '100%';
  imgPreview.className = '';
  imgPreview.classList.add('effects__preview--none');
  sliderContainer.classList.add('hidden');
  currentEffectClass = 'effects__preview--none';

  // Сброс выбранного радиобаттона
  const noneRadio = uploadForm.querySelector('#effect-none');
  if (noneRadio) {
    noneRadio.checked = true;
  }

  // Сброс слайдера
  if (effectSlider.noUiSlider) {
    effectSlider.noUiSlider.updateOptions({
      range: { min: 0, max: 100 },
      start: EFFECT_LEVEL_MAX,
      step: 1,
      connect: 'lower',
    });
    effectSlider.noUiSlider.set(EFFECT_LEVEL_MAX);
  }
};

// Инициализация слайдера
if (!effectSlider.noUiSlider) {
  noUiSlider.create(effectSlider, {
    range: { min: 0, max: 100 },
    start: EFFECT_LEVEL_MAX,
    step: 1,
    connect: 'lower',
  });
}

// Обновление фильтра при изменении слайдера
effectSlider.noUiSlider.on('update', () => {
  const value = effectSlider.noUiSlider.get();
  effectLevelInput.value = value;

  effectRadioBtns.forEach((radio) => {
    if (radio.checked && radio.value !== 'none') {
      imgPreview.style.filter = styleFilterByEffects[radio.value](value);
    }
  });
});

// Обработчик выбора эффекта
effectRadioBtns.forEach((radio) => {
  radio.addEventListener('click', () => {
    const effect = radio.value;
    const newClass = getEffectClass(effect);

    imgPreview.classList.replace(currentEffectClass, newClass);
    currentEffectClass = newClass;

    // Сброс слайдера на максимальное значение
    effectSlider.noUiSlider.set(EFFECT_LEVEL_MAX);

    if (effect === 'none') {
      resetFilter();
    } else {
      sliderContainer.classList.remove('hidden');

      // Обновляем настройки слайдера под выбранный эффект
      effectSlider.noUiSlider.updateOptions(Effects[effect]);

      // Применяем фильтр сразу после сброса слайдера
      const value = effectSlider.noUiSlider.get();
      imgPreview.style.filter = styleFilterByEffects[effect](value);
    }
  });
});

export {resetFilter};
