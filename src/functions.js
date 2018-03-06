/**
 * insertAt - insert item into the array at specified index and returns the new array
 *
 * @param  {Array} arr     array to insert into
 * @param  {number} index   index to insert at
 * @param  {any} newItem item to insert
 * @return {Array}         final array
 */
function insertAt (arr, index, newItem) {
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
  ]
}

export {
  insertAt
}
