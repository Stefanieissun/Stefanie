// 那我们都知道，在 ES6 前，JavaScript 共六种数据类型，分别是：
// Undefined、Null、Boolean、Number、String、Object 
// 然而当我们使用 typeof 对这些数据类型的值进行操作的时候，返回的结果却不是一一对应，
// 分别是：
// undefined、object、boolean、number、string、object
// 所以 typeof 能检测出六种类型的值，但是，除此之外 Object 
// 下还有很多细分的类型呐，如 Array、Function、Date、RegExp、Error 等。

// 以下是11种：
let number = 1;          // [object Number]
let string = '123';      // [object String]
let boolean = true;      // [object Boolean]
let und = undefined;     // [object Undefined]
let nul = null;          // [object Null]
let obj = {a: 1}         // [object Object]
let array = [1, 2, 3];   // [object Array]
let date = new Date();   // [object Date]
let error = new Error(); // [object Error]
let reg = /a/g;          // [object RegExp]
let func = function a(){}; // [object Function]
let jsonData={"a":1,"b":2}
function checkType(...a:any) {
    for (var i = 0; i < a.length; i++) {
        console.log(Object.prototype.toString.call(a[i]))
    }
}

checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func )