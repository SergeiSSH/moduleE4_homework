function Appliance (price, amperes, volts) {
    this.price = price;
    this.amperes = amperes;
    this.volts = volts;
    this.switch = false;   
}

const PC = function(price, amperes, volts, CPU, RAM, ssd, GPU) {
    this.CPU = CPU;
    this.RAM = RAM;
    this.ssd = ssd;
    this.GPU = GPU;
    this.price = price;
    this.amperes = amperes;
    this.volts = volts;
 }
PC.prototype = new Appliance();


const Lamp = function (price, amperes, volts, type, color){
    this.type = type;
    this.color = color;
    this.price = price;
    this.amperes = amperes;
    this.volts = volts;
}
Lamp.prototype = new Appliance();


Appliance.prototype.getWatt = function () {
    let power = this.amperes * this.volts;
    console.log(`Мощность товара: ${power} Ватт`);
}
Appliance.prototype.getPrice = function () {
    console.log(`Цена = ${this.price}`);
}

PC.prototype.getNominal = function () {
    return `Описание компьютера: ${this.CPU}/RAM ${this.RAM}/SSD ${this.ssd}/GPU ${this.GPU}`;
}
Lamp.prototype.getNominal = function () {
    return `Описание лампы: ${this.type}, color: ${this.color}`;
}

let pc1 = new PC(40000,2,220,'AMD Ryzen 5 3600','A-Data XPG 32G','A-Data XPG 512G','Radeon 6600XT');
let lamp1 = new Lamp(2800,1,220,'floor lamp','gold');


Appliance.prototype.On = function () {
    this.switch = false
}
Appliance.prototype.Off = function () {
    this.switch = true
}




console.log(pc1.getNominal());
pc1.On();
if (pc1.switch) {
    console.log(pc1.getNominal()+' выключен.');
}else {
    pc1.getNominal();
    console.log(pc1.getNominal()+' включен.');
}

pc1.getPrice();
pc1.getWatt();

console.log('****************')

console.log(lamp1.getNominal());
lamp1.Off();
if (lamp1.switch) {
    console.log(lamp1.getNominal()+' выключена.');
}else {
    console.log(lamp1.getNominal()+' включена.');
}

lamp1.getPrice();
lamp1.getWatt();
