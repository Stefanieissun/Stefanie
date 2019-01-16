interface drinkStep{
    brew():void
    pourInCup():void
    addCondiments():void
}

class drinkTea implements drinkStep{
    customerWant:boolean
    constructor(ifneed:boolean){
        this.customerWant=ifneed;
    }
    boilWater(){
        console.log('把水煮沸');
    }
    brew(){
        console.log('用沸水冲泡tea')
    }
    pourInCup(){
        console.log('将沸水倒入到茶杯')
    }
    addCondiments(){
        console.log('加柠檬')
    }
    init(){
        this.boilWater()
        this.brew()
        this.pourInCup()
        if(this.customerWant){
            this.addCondiments();
        }
       
    }
}
let drink=new drinkTea(true);
drink.init();