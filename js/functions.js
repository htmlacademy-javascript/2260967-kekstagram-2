function stringLengthChecking(str, maxLength) {
  return str.length <= maxLength;
}
console.log(stringLengthChecking('очень длинный текст для проверки', 20));

function palindromChecking(str) {
  const normalized = String(str).replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i = i - 1) {
    const symbol = normalized[i];
    reversed = reversed + symbol
  }
  return reversed === normalized;
}
console.log(palindromChecking('топот'));
console.log(palindromChecking('ДОВОД'));
console.log(palindromChecking('Кекс'));

function extractDigits(value) {
  const text = (typeof value === 'number') ? value.toString() : String(value);
  let digits = '';

  for (let i = 0; i < text.length; i++) {
    const n = parseInt(text[i], 10);
    if (!Number.isNaN(n)) {
      digits = digits + n;
    }
  }

  return digits === '' ? NaN : parseInt(digits, 10);
}
console.log(extractDigits('юля90юля67'));
console.log(extractDigits('юляюляюля'));

