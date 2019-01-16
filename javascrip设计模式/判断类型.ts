// let each:Function=function (ary:Array<any>,callback:Function){
//     let len=ary.length;
//     for(let i=0;i<len;i++){
//         callback.call(ary[i],i,ary[i]);
//     }
// }

// each([1,2,3],function(i:number,n:number){
//     console.log(n+1);
// })
function is(type:string,value:any){
    let obj= Object.prototype.toString.call(value).split('');
    obj=obj.splice(0,obj.length-1);
   return type=== obj.join('').split(' ')[1]?true:false
}
function panduan(value:any){
    let type:Array<string>=['Array','Object','Number','String','Symbol','Date','RegExp','Map','Set','Undefined','Function']
    let len=type.length;
    for(let i=0;i<len;i++){
      if( is( type[i],value)){
          return type[i];
      }
    }

}
