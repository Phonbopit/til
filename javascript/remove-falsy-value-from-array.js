/**
 * Remove falsy value from array
 */
 
 const values = [1, null, 2, false, 3, undefined, 4, 5]
 values.filter(val => val) // [1, 2, 3, 4, 5]
