function sortAndFilterArray(arr) {
    // Filter out non-numeric elements
    const filteredArray = arr.filter(element => typeof element === 'number');
    
    // Sort the array in ascending order
    const sortedArray = filteredArray.sort((a, b) => a - b);
    
    return sortedArray;
}

// Example usage
const mixedArray = [3, 'hello', 7, 1, 5, null, 2, 8, undefined, 'world', 4];
const sortedFilteredArray = sortAndFilterArray(mixedArray);
console.log('Sorted and filtered array:', sortedFilteredArray);