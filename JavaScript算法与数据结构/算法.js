// 快排的流程
// 1随机选择数组的一个数A,以这个数为基准
// 2其他数字跟这个数进行比较，比这个数小的放在左边，大的放在右边
// 3经过一次循环后，A左边的小于A,右边大于A的
// 4将左边和右边的数组再次递归上面的过程

var quickSort = function(arr) {
    　　if (arr.length <= 1) { return arr; }
    　　var pivotIndex = Math.floor(Math.random()*arr.length);
    　　var pivot = arr.splice(pivotIndex, 1)[0];
    　　var left = [];
    　　var right = [];
    　　for (var i = 0; i < arr.length; i++){
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);
    　　　　} else {
    　　　　　　right.push(arr[i]);
    　　　　}
    　　}
    　　return quickSort(left).concat([pivot], quickSort(right));
    };
quickSort([4,2,56,2,5])

js产生一个随机数
function getRandom(max,min){
    return Math.floor(Math.random()*(max-min+1)+min)
}


//希尔排序   非稳定排序，不建议使用

function shellSort(arr){
    let len=arr.length,
    temp,
    gap=1;
    while(gap<len/3){
        gap=gap*3+1;
    }
    for(gap;gap>0;gap=Math.floor(gap/3)){
        for(let i=gap;i<len;i++){
            temp=arr[i];
            for(var j=i-gap;j>=0&&arr[j]>temp;j-=gap){
                arr[j+gap]=arr[j];
            }
            arr[j+gap]=temp;
        }
    }
    return arr;
}