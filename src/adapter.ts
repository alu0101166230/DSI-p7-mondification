import {ImperialLenght} from './imperial_lenght';
import {MetricLenght} from './metric_lenght';

class Adapter extends MetricLenght {
    private imperial_lenght: ImperialLenght;
    constructor( imperial_lenght: ImperialLenght,
    ) {
      super();
      this.imperial_lenght = imperial_lenght;
    }



}
