/**
 * 判断是否是数组
 * @param arr
 * @returns boolean
 */
export function isArr(arr) {
  return Array.isArray(arr);
}

/**
 * 如果不是数组，或者数组中的元素个数为0，返回true，
 * @param arr
 * @returns {boolean}
 */
export function isEmpty(arr) {
  // 如果不是数组则返回true
  if (!isArr(arr)) return true;
  return arr.length === 0;
}

export function isNotEmpty(arr) {
  if (!isArr(arr)) return false;
  return arr.length !== 0;
}
