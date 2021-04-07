export class ImperialLenght {
  constructor(
          private lenght: number,
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
