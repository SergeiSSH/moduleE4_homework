class Appliance {
      constructor(price,amperes,volts){
      this.price = price;
      this.amperes = amperes;
      this.volts = volts;
      this.switch = false;   
 }
 On(){
    this.switch = false;
    console.log('прибор включен.');
 }
 Off(){
    this.switch = true;
    console.log('прибор выключен.');
 }
 getWatt(){
    let power = this.amperes * this.volts;
    console.log(`Мощность товара: ${power} Ватт`);
 }
 getPrice(){
    console.log(`Цена = ${this.price}`);
 }
}

class PC extends Appliance {
    constructor(price, amperes, volts, CPU, RAM, ssd, GPU){ 
    super(price,amperes,volts);
     this.CPU = CPU;
    this.RAM = RAM;
    this.ssd = ssd;
    this.GPU = GPU; 
 }
  getNominal(){
    return `Описание компьютера: ${this.CPU}; RAM ${this.RAM}; SSD ${this.ssd}; GPU ${this.GPU}`;
 }
}

class Lamp extends Appliance{
    constructor(price, amperes, volts, type, color){
    super(price,amperes,volts);
    this.type = type;
    this.color = color;
    
 }
 getNominal(){
    return `Описание лампы: ${this.type}; color: ${this.color}`;
 }

}

let pc1 = new PC(40000,2,220,'AMD Ryzen 5 3600','A-Data XPG 32G','A-Data XPG 512G','Radeon 6600XT');
let lamp1 = new Lamp(2800,1,220,'floor lamp','gold');

console.log(pc1.getNominal());
pc1.On();
pc1.getPrice();
pc1.getWatt();

console.log('****************')

console.log(lamp1.getNominal());
lamp1.Off();
lamp1.getPrice();
lamp1.getWatt();
