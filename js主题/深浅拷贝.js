//对象，数组的深拷贝   (开辟一块地址),浅拷贝（指向同一个地址，一个改变，另一个也跟着改变）
//深拷贝使用递归，性能不如浅拷贝
function deepCopy(obj){
    if(typeof obj!=='object'){return false}
    let newObj=Array.isArray(obj)?[]:{}
    Object.keys(obj).map(x=>{
        newObj[x]=typeof obj[x]==='object'?deepCopy(obj[x]):obj[x]
    })
    return newObj
}
function shallowCopy(obj){
    if(typeof obj!=='object'){return false}
    let newObj=Array.isArray(obj)?[]:{}
    Object.keys(obj).map(x=>{
        newObj[x]=obj[x]
    })
    return newObj
}
let x={a:{b:{c:1}}}
console.log('x',x)
let y=deepCopy(x)

y.a.b.c=1500
console.log('x',x)