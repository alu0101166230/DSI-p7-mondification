export class ImperialLenght {
    private lenght: number = 0;
    constructor(
         
  ) {

  };


  setFeet(feet: number) {
      this.lenght = feet;
  }

  setYard(feet: number) {
    this.lenght = feet;
  }

  setPulgadas(feet: number) {
    this.lenght = feet;
  }

  getLenght() {
    return (this.lenght);
  }
}
