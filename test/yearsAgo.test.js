import assert from 'assert';
import yearsAgo from '../yearsAgo.js';

describe('Test for the yearsAgo function' , function(){
    it("It should return ',46 years' if  function  yearsAgo is called with 1976. " , function(){
        
        assert.equal(46,yearsAgo(1976),"this should be true"); 
        
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ',22 years' function  yearsAgo is called with2000." , function(){
        
        assert.equal(22,yearsAgo(2000),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });2000
   

});