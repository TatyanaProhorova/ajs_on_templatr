// // TODO: write your code here
// ESLint не должен выдавать ошибок.
// Jest должен обеспечивать 100-процентное покрытие по строкам
// для тестируемых функций.
// Ко всем задачам должен быть подключён AppVeyor и выставлен бейджик статуса.

// здоровье более 50 — зелёный;
// здоровье от 50 и до 15 — жёлтый;
// здоровье менее 15 — красный.
// Реализуйте функцию, которая принимает {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк:   healthy,   wounded,   critical.
// Сгенерируйте проект на базе npm. Подключите туда jest и напишите автотесты,
// которые обеспечивают 100-процентное покрытие вашей функции по строкам.

// import sum from './basic';

// console.log('worked');

export default function healthStatus(character) {
  let result = 0;
  if (character.health < 15) {
    result = 'critical';
  } else if (character.health >= 15 && character.health <= 50) {
    result = 'wounded';
  } else if (character.health > 50) {
    result = 'healthy';
  }
  return result;
}
