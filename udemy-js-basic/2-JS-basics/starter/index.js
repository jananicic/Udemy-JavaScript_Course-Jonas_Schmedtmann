/******************************************************************************************************
let markBMI, jhonBMI;
let markTezina, markVisina, jhonTezina, jhonVisina;

markTezina = prompt("unesi tezinu od marka");
markVisina = prompt("unesi visinu od marka");
jhonTezina = prompt("unesi tezinu od jhona");
jhonVisina = prompt("unesi visinu od jhona");

markBMI = markTezina * (markVisina * markVisina);
jhonBMI = jhonTezina * (jhonVisina * jhonVisina);

let bool = markBMI > jhonBMI;
document.write(`markBMI ${markBMI} <br>`);
document.write(`jhonBMI ${jhonBMI} <br>`);
document.write("mark ima veci BMI: " + bool);

bool ? document.write("uspijeh") : document.write("ne uspijeh");
*/

/******************************************************************************************************
let jhonsTeam = [89, 120, 103];
let mikesTeam = [116, 94, 123];

let jhonsScore = mikesScore = null;

for(i = 0; i < jhonsTeam.length; i++) {
    jhonsScore += jhonsTeam[i];
    document.write(`score ${jhonsScore} team ${jhonsTeam[i]} <br>`)
}
for(i = 0; i < mikesTeam.length; i++) {
    mikesScore += mikesTeam[i];
    document.write(`score ${mikesScore} team ${mikesTeam[i]} <br>`)
}

jhonsScore /= jhonsTeam.length
mikesScore /= mikesTeam.length

if(jhonsScore > mikesScore)
    document.write(`jhon's team is better ${jhonsScore} <br>`)
else if (mikesScore > jhonsScore)
    document.write(`mike's team is better ${mikesScore} <br>`)
else
    document.write(`scores are same jhon -> ${jhonsScore}, mike -> ${mikesScore} <br>`)
*/

/*var names = ['jan', 'anja', 'srki'];
var years = new Array(123,234,345);*/

/******************************************************************************************************
// stvori array sa 124, 48, 268 brojevima
const bills = [124, 48, 268];
// stvori prazan array sa tri mjesta
let finalBill = [0, 0, 0];

// 20% < 50, 15% >= 50 <= 200, 10% > 200
function punaCijena(racun){
    if (racun< 50)
        return finalBill[i] = racun+ racun* 0.5;
    else if (racun>= 50 && racun<= 200)
        return finalBill[i] = racun+ racun* 0.15;
    else if (racun> 200)
        return finalBill[i] = racun+ racun* 0.1;
    else
        return finalBill[i] = "krivo";
}
for (i=0; i < bills.length; i++){
    finalBill[i] = punaCijena(bills[i]);
}

for (i=0; i < finalBill.length; i++){
    document.write(`bill ${i} -> ${finalBill[i]} </br>`);
}
*/

/*let obj = {
    ime: "jan",
    prezime: "anicic",
    rodenje: 1999,
    dob: function(){
        let rodenje = 2000;
        return 2018 - this.rodenje;
    }
};
console.log(obj.dob());*/

/******************************************************************************************************
let jhon = {
    name: "Jhon",
    mass: "56",
    height: 1.75,
    calculate: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },
};

let mark = {
    name: "Mark",
    mass: "96",
    height: 1.93,
    calculate: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },
};

if(jhon.calculate() > mark.calculate())
    document.write(`${jhon.name} has greater mass -> ${jhon.BMI}, than ${mark.name} -> ${mark.BMI} </br>`);
else if (mark.BMI > jhon.BMI)
    document.write(`${mark.name} has greater mass -> ${mark.BMI}, than ${jhon.name} -> ${jhon.BMI} </br>`);
else
    document.write(`same`);
*/

/*let jhon = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    payment: [],
    calc: function() {
        for(i = 0; i < this.bill.length; i++){
            if (this.bill[i] < 50){
                this.tip.push(this.bill[i] * 0.5);
                this.payment.push(this.tip[i] + this.bill[i]);
            } 
            else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tip.push(this.bill[i] * 0.15);
                this.payment.push(this.tip[i] + this.bill[i]);
            } 
            else {
                this.tip.push(this.bill[i] * 0.1);
                this.payment.push(this.tip[i] + this.bill[i]);
            }
        }
    }
}*/
