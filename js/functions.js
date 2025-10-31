function stringLengthChecking(str, maxLength) {
  return str.length <= maxLength;
}

function palindromChecking(str) {
  const normalized = String(str).replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i = i - 1) {
    const symbol = normalized[i];
    reversed = reversed + symbol;
  }
  return reversed === normalized;
}

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


