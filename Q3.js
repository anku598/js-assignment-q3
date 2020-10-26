// There are different ways to solve this problem. few are the belows

let arr = [1, 2, 2, 3, 4, 4, 5];

// Using Filter
function removeDuplicateItemsUsingFilter(data) {
  return data.filter((val, idx) => data.indexOf(val) === idx)
}
console.log(removeDuplicateItemsUsingFilter(arr))




// Using ForEach
function removeDuplicateItemsUsingForEach(data) {
  let result = []
  data.forEach(val => {
    if (!result.includes(val)) {
      result.push(val)
    }
  })

  return result;
}
console.log(removeDuplicateItemsUsingForEach(arr))




//using map 
function removeDuplicateItemsUsingmap(data) {
  let result = []
  data.map(element => {
    if (!result.includes(element)) {
      result.push(element)
    }
  })
  return result
};
console.log(removeDuplicateItemsUsingmap(arr))


//Using Set
function removeDuplicateItemsUsingset(data) {
  return [...new Set(data)];
}

console.log(removeDuplicateItemsUsingset(arr))






