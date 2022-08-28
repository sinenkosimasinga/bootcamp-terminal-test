import assert from 'assert';
import greet from '../greet.js'
import chalk from 'chalk';

const styledMessage = chalk.bgGreen.black(greet('Test my greet function'));

// console.log(greet("hlananani"));
describe(styledMessage , function(){
    it("It should return ,'Hello,sinenkosi'when called with 'sinenkosi'" , function(){
        
        assert.equal("Hello, sinenkosi",greet("sinenkosi"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Mandla'when called with 'Mandla'" , function(){
        
        assert.equal("Hello, Mandla",greet("Mandla"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });1

});