
enum orderType{
    pay500=1,
    pay200=2,
    payNormal=0
}
let order500=function(orderType:orderType,pay:boolean,stock:number){
    if ( orderType === 1 && pay === true ){
        console.log( '500 元定金预购,得到 100 优惠券' );
        }else{
        return 'nextSuccessor';
        // 我不知道下一个节点是谁,反正把请求往后面传递
        }
}
let order200=function(orderType:orderType,pay:boolean,stock:number){
    if ( orderType === 2 && pay === true ){
        console.log( '200 元定金预购,得到 50 优惠券' );
        }else{
        return 'nextSuccessor';
        // 我不知道下一个节点是谁,反正把请求往后面传递
        }
}
let orderNormal=function(orderType:orderType,pay:boolean,stock:number){
    if(stock>0){
        console.log('普通购买，无优惠券');
    }else{
        console.log('手机库存不足')
    }
}

class Chain{
    fn:Function
    successor:any
    constructor(fn:Function){
        this.fn=fn;
    }
    setNextSuccessor(successor:Chain){
        this.successor=successor;
    }
    passRequest(orderType:orderType,pay:boolean,stock:number){
        let ret=this.fn(orderType,pay,stock);
        if(ret==='nextSuccessor'){
            return this.successor&&this.successor.passRequest(orderType,pay,stock);
        }
        return ret;
    }
}

var chainOrder500 = new Chain( order500 );

var chainOrder200 = new Chain( order200 );
var chainOrderNormal = new Chain( orderNormal );
debugger
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(orderType.pay500,true,2);
chainOrder500.passRequest(orderType.pay200,true,0);
chainOrder500.passRequest(orderType.payNormal,true,1);
chainOrder500.passRequest(orderType.payNormal,true,0);