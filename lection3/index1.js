/**
 * Prototype
 * Inheritance
 */

const Osoba = function () {
  let ime, prezime, broj;

  this.setPodatci = function (_ime, _prezime, _broj) {
    ime = _ime;
    prezime = _prezime;
    broj = _broj;
  };

  Object.defineProperty(this, "osoba", {
    get: function () {
      document.write("<br>OSOBA -> " + ime + ", " + prezime + ", " + broj);
    },
    set: function (value) {
      ime = value;
    }
  });
};

const jan1 = new Osoba();
const jan2 = new Osoba();

jan1.setPodatci("Jan", "Anicic", 123);
jan1.osoba;
jan2.setPodatci("Jan2", "Anicic2", 234);
jan2.osoba;
jan1.osoba;

/*Osoba.prototype.getPrezime = function() {
  document.write("<br>Prezime -> " + prezime);
};

jan1.getPrezime();
jan2.getPrezime();*/

console.log(jan1.ime);
