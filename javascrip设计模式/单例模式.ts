
class Single{
    name:string
    static instance:any=''
    constructor(name:string){
        this.name=name;
    }
    static getInstance(name:string){
        if(!this.instance){
            this.instance=new Single(name)
        }
        
        return this.instance;
    }
   
}

let a=Single.getInstance('a1');
let b=Single.getInstance('b1');
console.log(a===b);