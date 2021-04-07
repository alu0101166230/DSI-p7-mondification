

export class MetricLenght {
    private lenght: number = 0;
    constructor(

    ) {

    };

    getLenghtByCentemeter():number {
      return this.lenght;
    }

    getLenghtByMeter() {
      return this.lenght / 100;
    }

    getLenghtByKm() {
      return this.lenght / 100000;
    }

    setCm(cm: number) {
      this.lenght = cm;
    }
    setM(cm: number) {
        this.lenght = cm;
      }
      setKm(cm: number) {
        this.lenght = cm;
      }
}
