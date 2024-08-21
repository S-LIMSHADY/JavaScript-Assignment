function findSubsetsThatSumToTarget(target, array) {
    const result = [];

    // Helper function to find subsets
    function findSubsets(currentSubset, startIndex, currentSum) {
        if (currentSum === target) {
            result.push([...currentSubset]); // Found a valid subset
            return;
        }

        for (let i = startIndex; i < array.length; i++) {
            if (currentSum + array[i] <= target) {
                // Include array[i] in the current subset
                currentSubset.push(array[i]);
                findSubsets(currentSubset, i + 1, currentSum + array[i]);
                // Backtrack
                currentSubset.pop();
            }
        }
    }

    // Start with an empty subset
    findSubsets([], 0, 0);

    return result;
}


const target = 7;
const numbers = [1, 2, 3, 4, 5];
const subsets = findSubsetsThatSumToTarget(target, numbers);
console.log('Subsets that sum to', target, ':', subsets);
