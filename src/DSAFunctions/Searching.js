
// function linearSearch(array, target){
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].title === target) {
//         return array[i];
//       }
//     }
//     return -1;
//   };
  
// export default linearSearch

function linearSearch(array, target) {
  const matchingItems = [];

  for (let i = 0; i < array.length; i++) {
      if (array[i].title.includes(target)) {
          matchingItems.push(array[i]);
      }
  }

  return matchingItems.length > 0 ? matchingItems : -1;
}

export default linearSearch;
