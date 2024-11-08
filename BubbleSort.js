function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;
    for (let i = 0; i < array.length; i++) {
        isSwapped = false;
        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return array;
}

const sortedArray = bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]);
console.log("Sorted Array:");
console.log(sortedArray);