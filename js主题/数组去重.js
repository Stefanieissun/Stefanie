//1远古方法   



// 2求数组中最大的值
Math.max(true, 0) // 1
Math.max(true, '2', null) // 2
Math.max(1, undefined) // NaN
Math.max(1, {}) // NaN
//怪异
var min = Math.min();
var max = Math.max();
console.log(min > max);


// 1原始方法 ，循环一遍
function getMax(arr) {
    let result=arr[1]
    arr.map(x=>{
        if(x>result){
            result=x;
        }
    })
    return result
}
// 2 reduce
function getMax2(arr){
  return  arr.reduce((prev,next)=>{
        return Math.max(prev,next)
    })
}
// 3排序
function getMax3(arr){
    return arr.sort((a,b)=>b-a)[0]
}
//ES6
function getMax4(arr){
    return Math.max(...arr)
}