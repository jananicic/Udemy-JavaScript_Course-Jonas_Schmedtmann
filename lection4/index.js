let ime = "Jan";
let prezime = "Anicic";

// template literals -> ``
document.write(`${ime} ${prezime} </br>`);
// check later tagged templates literals

for (let c of ime){
    document.write(`${c} </br>`);
}

document.write("Hello ".repeat(3) + "</br>");
document.write(prezime.startsWith("An") + "</br>");
document.write(prezime.startsWith("an") + "</br>");
document.write(prezime.endsWith("ic") + "</br>");

let multilineStr = `This
is
a
multiline`;

document.write(`${multilineStr} </br>`);

/** ---------- CLASSES --------------- */

class Mammal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("Fred");

monkey.name = "Mark";

document.write(`Mammal: ${monkey.name} </br>`);

let chimpmunk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2: ${chimpmunk.name} </br>`);

class Marsupial extends Mammal {
    // ZASTO U KONSTRUKTORU DEFINIRAMO VARIJABLE A NE VANI, JEL SE MOGU VANI?
    constructor(name, hasPouch) {
        // PONOVI SUPER
        super(name);
        this._hasPauch = hasPouch;
    }

    get hasPouch() {
        return this._hasPauch;
    }

    set hasPouch(hasPouch) {
        this._hasPauch = hasPouch;
    }

    getInfo() {
        return `${this.name} is a marsupial`;
    }
}

let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch </br>`);

