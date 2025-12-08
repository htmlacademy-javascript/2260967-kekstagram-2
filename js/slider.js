import { uploadForm } from './form';
const EFFECT_LEVEL_MAX = 100;
const effectLevelInput = uploadForm.querySelector('.effect-level__value');
effectLevelInput.value = EFFECT_LEVEL_MAX;
const effectSlider = uploadForm.querySelector('.effect-level__slider');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const photoPreview = uploadForm.querySelector('.img-upload__preview');
const imgPreview = photoPreview.firstElementChild;
const selectorImg = 'effects__preview--none';
const effectRadioBtns = uploadForm.querySelectorAll('.effects__radio');
import {styleFilterByEffects} from './data.js';
import {Effects} from './data.js';

const getEffectSelector = (currentInputId) => {
  const selectors = {
    'effect-none': 'effects__preview--none',
    'effect-chrome': 'effects__preview--chrome',
    'effect-sepia': 'effects__preview--sepia',
    'effect-marvin': 'effects__preview--marvin',
    'effect-phobos': 'effects__preview--phobos',
    'effect-heat': 'effects__preview--heat',
  };
  return selectors[currentInputId];
};
const getUpdateSliderOptions = (effect, sliderElement) => {
  sliderElement.noUiSlider.updateOptions(Effects[effect]);
};
const resetFilter = () => {
  imgPreview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
  imgPreview.classList.add('effects__preview--none');
};
const onEffectRadioBtnClick = (evt) => {
  const currentRadioBtn = evt.target.closest('.effects__radio');

  if (currentRadioBtn) {
    const effectBtnValue = currentRadioBtn.value;
    imgPreview.classList.replace(selectorImg, getEffectSelector(effectBtnValue));
    getUpdateSliderOptions(effectBtnValue, effectSlider);
  }
};
noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectLevelInput.value = effectSlider.noUiSlider.get();

  effectRadioBtns.forEach((item) => {
    if (item.checked) {
      if (item.value !== 'none') {
        sliderContainer.classList.remove('hidden');
        imgPreview.style.filter = styleFilterByEffects[item.value](effectLevelInput.value);
      } else {
        resetFilter();
      }
    }
  });
});

effectRadioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('click', onEffectRadioBtnClick);
});

const checkedRadio = uploadForm.querySelector('.effects__radio:checked');
if (checkedRadio.value === 'none') {
  resetFilter();
}
