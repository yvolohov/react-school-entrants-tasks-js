/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let copyArr2 = arr2.slice();
  copyArr2.sort();

  for (let idx = 0; idx < arr1.length; idx++) {
    let el1 = arr1[idx];
    let el2 = copyArr2[idx];

    if (el1 !== el2) {
      return false;
    }
  }
  return true;
}

export default haveSameItems;
