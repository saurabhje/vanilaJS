function mergeSort(array){
    const arrL = array.length;
    if(arrL < 2)
      return 
    const mid = Math.floor(arrL / 2);
    let left = new Array(mid);
    let right = new Array(arrL - mid);
    for(let i = 0; i < mid; i++){
      left[i] = array[i];
    }
    for(let i = mid; i < arrL; i++){
      right[i - mid] = array[i];
    }
    mergeSort(left);
    mergeSort(right);
    mergeArrays(left, right, array); 
    return array; 
  }
  
  function mergeArrays(left, right, a){
    let k = 0;
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
      if(left[i] <= right[j]){
        a[k] = left[i];
        k++;
        i++;
      }
      else{
        a[k] = right[j];
        k++;
        j++;
      }   
    }
    while(i < left.length){
      a[k] = left[i];
      i++;
      k++;
    }
    while(j < right.length){
      a[k] = right[j];
      j++;
      k++;
    }
  }
  
  console.log(mergeSort([10, 7, 8, 9, 1, 5]));
  