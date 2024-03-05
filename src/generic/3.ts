/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, K extends object>(objA: T, objB: K): T & K {
  return Object.assign(objA, objB);
}

const objA = {
  name: "Toyota Corolla",
  type: "sedan",
  position: 20,
  color: "black",
  weight: 1785,
  height: 1680,
};

const objB = {
  name: "Toyota Verso",
  position: 40,
  color: "grey",
  weight: 1800,
};
merge(objA, objB);

const objC = { name: "Tom" };
const objD = { age: 24, weight: 65 };
merge(objC, objD);
