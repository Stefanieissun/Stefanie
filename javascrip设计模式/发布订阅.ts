interface eventContentType{
    [index:string]:Function[]
}
class EventLike{
    private content:eventContentType
    constructor() {
        this.content={}
    }
     addEvent(methodName:string,method:Function){
        if(!Object.keys(this.content).includes(methodName)){
            this.content[methodName]=[];
        }
        this.content[methodName].push(method);
    }
     removeEvent(methodName:string){
         delete this.content[methodName];
     }

     emitEvent(methodName:string){
        if(Object.keys(this.content).includes(methodName)){
            console.log('有监听这个事件，开始执行');
           this.content[methodName].map(x=>x());
           return null;
        }
        console.log('没有注册此类事件');
    }
}

let e=new EventLike();
e.addEvent('a',()=>console.log('触发a事件'))
export =e;
