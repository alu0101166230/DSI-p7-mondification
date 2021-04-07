

export class MetricLenght {
  constructor(
        public readonly lenght: number,
  ) {

  };

  getLenghtByCentemeter():number{
    return this.lenght
  }

  getLenghtByMeter(){
    return this.lenght / 100;
  }
  
  getLenghtByKm(){
    return this.lenght / 100000;
}
}
