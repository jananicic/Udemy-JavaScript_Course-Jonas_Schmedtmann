let slike = function() {
  let boja = null;

  Object.defineProperty(this, "boja", {
    get: function() {
      document.write("get -> " + boja + "</br>");
      return boja;
    },
    set: function(value) {
      if (value.length < 3) {
        console.log("Upisana boja: " + value);
        throw new Error("Boja mora imati vise od 3 slova!");
      }
      document.write("set before -> " + boja + "</br>");
      boja = value;
      document.write("set after -> " + boja + "</br>");
    }
  });
};

let slika1 = new slike();

slika1.boja = "crvena";
slika1.boja;

slika1.boja = "as";
