import 'mocha';
import {expect} from 'chai';
import {ImperialLenght} from '../src/imperial_lenght';

describe('ImperialLenght', () =>{
  const imperialLenght = new ImperialLenght(100);


  it('Metric must retunr unit by cm', ()=> {
    imperialLenght.setFeet(100);
    expect(imperialLenght.getLenght()).to.be.equal(100);
  });

  it('Metric must retunr unit by m', ()=> {
    imperialLenght.setYard(100);
    expect(imperialLenght.getLenght()).to.be.equal(100);
  });

  it('Metric must retunr unit by Km', ()=> {
    imperialLenght.setPulgadas(100);
    expect(imperialLenght.getLenght()).to.be.equal(100);
  });
});


/*
describe ('ImperialLenght', () =>{
    it('Metric must retunr unit by cm', ()=> {
        expect(2+2).to.be.eq(4);
    });
})

*/
