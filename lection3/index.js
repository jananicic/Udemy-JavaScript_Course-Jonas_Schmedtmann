/*function Id() {
  let ime, prezime, broj;

  this.setPodaci = function(_ime, _prezime, _broj) {
    this.ime = _ime;
    this.prezime = _prezime;
    this.broj = _broj;
  };

  this.setIme = function(_ime) {
    this.ime = _ime;
  };

  this.setPrezime = function(_prezime) {
    this.prezime = _prezime;
  };

  this.setBroj = function(_broj) {
    this.broj = _broj;
  };

  Object.defineProperty(this, "id", {
    get: function() {
      return this.ime + ", " + this.prezime + ", " + this.broj;
    }
  });
}

const jan = new Id();
jan.setIme("Jan");
jan.setPrezime("Anicic");
jan.setBroj(123);
document.write("janovi podaci su: " + jan.id + "<br><br>");

const josip = new Id();
josip.setPodaci("Josip", "Reh", 234);
document.write("josipovi podaci su: " + josip.id);
*/
