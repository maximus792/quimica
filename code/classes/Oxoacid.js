class Oxoacid {
  constructor(arr) {
    /*addMissingValences*/
    this.e = arr;
  }

  getOxidResolve() {
    if (["C", "N", "S", "Se", "Te", "Cl", "Br", "I", "Cr", "Mn"].indexOf(this.e[2]) == -1) {
      $(".procediment-div").hide();
      $(".procediment").hide();
      Toast("No es pot fer un oxoacid amb aquest element");
      throw "No es pot fer un oxoacid amb aquest element";
    }

    this.e[1] = Math.abs(this.e[1]);
    console.log(this.e);
    var mult = 1;
    if (this.e[1] == 1){
      this.e[1]*=2;
      this.e[3]*=2;
      this.e[5]*=2
    }
    if (this.e[5] == 1) {
      this.e[3] += 1;
      this.e[5] += 1;
    }
    console.log(this.e);

    console.log("passant al oxid:", [
      this.e[2],
      this.e[3],
      this.e[4],
      this.e[5] - 1,
    ]);
    return new Oxid([
      this.e[2],
      this.e[3],
      this.e[4],
      this.e[5] - 1,
    ]).resolve();
  }

  resolve() {
    return [this.getOxidResolve()[0], this.getOxidResolve()[1], "oxoacid"];
  }
}
