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

    // provjeri kako static funkcionira u js, jeli drugacije ista?
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

/** ---------- SYMBOLS ---------- */


let capital = Symbol("State capital");
let pennsylvania = {};
pennsylvania[capital] = "Harrisburg";

document.write(`Capital of PA : ${pennsylvania[capital]} <br/>`);
document.write(`Symbol Capital : ${capital.toString()} <br/>`);

let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob : ${bobSmith[employNum]} <br/>`);
document.write(`Sally : ${sallyMarks[employNum]} <br/>`);


/** ---------- PROMISE ---------- */

// TODO: DODATNO PROUCI PROMISE I Asynchronous vs Synchronous

function getUser() {
    return new Promise((resolve, reject) => {
      return resolve({
        username: 'jananicic123',
        fistname: 'jan',
        lastname: 'anicic'
      });
    })
  };
  
  function getUserFriends(user) {
    if (!user) throw new Error('user is required as function parameter!')
    return new Promise((resolve, reject) => {
      return resolve([
        {
          username: 'josipreh',
          firstname: 'josip',
          lastname: 'reh'
        },
        {
          username: 'lukasjurina',
          firstname: 'lukas',
          lastname: 'jurina'
        }
      ]);
    })
  };
  
  
  getUser().then(function(user) {
    console.log('user', user);
    return getUserFriends(user);
  }).then(function(friends) {
    console.log('friends', friends);
    // ovdje mozemo returnat jos jednu funkciju koja vraca //Promise
    // npr return getFriendsOfFriends(friends)
  })// i onda mozemo napravit novi
  //.then(getFriendsOfFriends...)
  //takoder promise moze biti i rejectan
  //reject znaci da se dogodila greska
  //kako bi uvhatili greksu
  //koristimo
  //.catch(error)
  //...catch ce se pozvati u slucaju bilo koje greske u bilo kojem "chain-anom" promise-u
  
  // ASYNC AWAIT
  
  async function program() {
    console.log('ASYNC AWAIT EXAMPLE')
    const user = await getUser();
    console.log('user', user);
    const friends = await getUserFriends(user);
    console.log('friends', friends);
  
    // takoder mozemo koristiti try catch blok
    /*
    try{
    const user = await getUser();
    console.log('user', user);
    const friends = await getUserFriends(user);
    console.log('friends', friends);
    } catch(e) {
      console.log('exception', exception);
    }
    */
  }
  
  setTimeout(() => {
    program();
  }, 1000);