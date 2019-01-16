/* 
很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。例如,绩效为 S 的人年
终奖有 4 倍工资,绩效为 A 的人年终奖有 3 倍工资,而绩效为 B 的人年终奖是 2 倍工资。假设财
务部要求我们提供一段代码,来方便他们计算员工的年终奖。
*/
let calculateBonus=function(performanceLevel:string,salary:number){
    if(performanceLevel==='S'){
        return salary*4;
    }
    if(performanceLevel==='A'){
        return salary*3
    }
    if(performanceLevel==='B'){
        return salary*2
    }
}
//改良后

let strategies:any={
    "S":(salary:number)=>{
        return salary*4
    },
    "A":(salary:number)=>{
        return salary*3;
    },
    "B":(salary:number)=>{
        return salary*2;
    }
}
let calculateBonusGood=function (performanceLevel:string,salary:number) {
    if(!Object.keys(strategies).includes(performanceLevel)){
        return {err:"不包含此类绩效"};
    }
    return strategies[performanceLevel](salary);
}

console.log('C,12323,应发年终奖为:',calculateBonusGood('C',2323443));
console.log('A,123333,应发年终奖为:',calculateBonusGood('A',123333));
console.log('S,14463,应发年终奖为:',calculateBonusGood('S',14463));
console.log('B,45000,应发年终奖为:',calculateBonusGood('B',45000));