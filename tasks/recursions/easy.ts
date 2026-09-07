// 1. Сумма от 1 до n

function sumTo(n: number): number {
  if (n === 0) {
    return 0;
  }

  return n + sumTo(n - 1);
}

console.log(sumTo(5)); // sumTo(5) === 15

// 2. Степень

function pow(base: number, exp: number): number {
  if (exp === 1) {
    return base;
  }

  return base * pow(base, exp - 1);
}

console.log(pow(2, 10)); // pow(2, 10) === 1024

// 3. Сумма цифр числа

function digitSum(n: number): number {
  if (n === 0) {
    return 0;
  }

  const last = n % 10;
  const rest = Math.floor(n / 10);

  return last + digitSum(rest);
}

console.log(digitSum(1234)); // digitSum(1234) === 10

// 4. Количество цифр

function digitCount(n: number, i = 1): number {
  n = Math.abs(n);

  if (n < 10) {
    return 1;
  }

  return 1 + digitCount(Math.floor(n / 10));
}

console.log(digitCount(12345)); // digitCount(12345) === 5 // digitCount(0) === 1

// 5. Перевернуть строку

function reverseString(s: string): string {
  if (s.length <= 1) {
    return s;
  }
  const first = s[0];
  const rest = s.slice(1);

  return reverseString(rest) + first;
}

console.log(reverseString("hello")); // reverseString("hello") === "olleh"
