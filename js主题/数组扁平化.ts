// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。
// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：
// var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]

function flatten(arr:any[]){
    return arr.toString().split(',').map(x=>Number(x))
}

console.log(flatten([1,2,[3,[4]]]))

function flatten1(arr:any[]){
    while(arr.some(x=>Array.isArray(x))){
        arr=[].concat(...arr)
    }
    return arr;
}
