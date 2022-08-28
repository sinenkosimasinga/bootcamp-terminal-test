import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe('Test Vehicle registration numbers function for Bellville ' , function(){
    it("It should returns true if a registration number ,'starts with CY'" , function(){
        
        assert.equal(true,isFromBellville("CY 123"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should returns false if a registration number ,'does not start with CY'" , function(){
        
        assert.equal(false, isFromBellville("CJ 123"),"this should be false"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});