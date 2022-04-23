function searchRotatedArray(array, target){
    let left = 0;
    let right = array.length - 1;
    let middle;

    while(left <= right)
    {
        middle = Math.floor((left + right)/2);
        if(target === array[middle]) return middle;
        if (array[left] <= array[middle]){
            if(target>=array[left] && target<array[middle]){
                right = middle - 1;

            }else{
                left = middle + 1;
            }
        }else{
            if(target<=array[right] && target > array[middle]){

                left = middle + 1;

            }else{

                right = middle - 1;
            }
        }
    }
    return -1;

}

array = [5,6,7,8,9,1,2,3,4];
console.log(searchRotatedArray(array, 1));