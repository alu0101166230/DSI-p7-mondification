import 'mocha';
import {expect} from 'chai';
import {MetricLenght} from '../src/metric_lenght';

describe('MetricLenght', () =>{
  const metricLenght = new MetricLenght(100);


  it('Metric must retunr unit by cm', ()=> {
    expect(metricLenght.getLenghtByCentemeter()).to.be.eq(100);
  });

  it('Metric must retunr unit by m', ()=> {
    expect(metricLenght.getLenghtByMeter()).to.be.eq(1);
  });

  it('Metric must retunr unit by Km', ()=> {
    expect(metricLenght.getLenghtByKm()).to.be.eq(0.001);
  });
});


/*
describe ('MetricLenght', () =>{
    it('Metric must retunr unit by cm', ()=> {
        expect(2+2).to.be.eq(4);
    });
})

*/
