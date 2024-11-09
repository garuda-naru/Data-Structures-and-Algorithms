function selectionSort(a) { 
    let len = a.length //first we need to know the length of array
    let minIndex; // second we need to define one variable , to store min index
    for (let i = 0; i< len - 1;i++){ // write first iteration  till length -1
      minIndex = i // assign firstly min index as first one
      for (let j = i+1;j<len;j++){ // then immediatley write second iteration from second indext to lenth
        if(a[j]<a[minIndex]){ //then compare second index to first index
          minIndex = j //if true then change min index to second
        }
      } 
      if(minIndex !== i) { //after fst iteration check minindex whether it is equals to i or not
        [a[i],a[minIndex] ] = [a[minIndex],a[i]] //if not then swap
      }
    }
    return a//else return array
  }
  
  const array = [64, 25, 12, 22, 11];
  console.log("Sorted Array:", selectionSort(array));
  