import assert from 'assert';
import transportFee from '../transportFee.js';

describe('Test for the transportFee function' , function(){
    it("It should return a total of R20 for ,'morning shift'" , function(){
        
        assert.equal("R20",transportFee('morning'),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a total of R10 for ,'afternoon shift'" , function(){
        
        assert.equal("R10",transportFee('afternoon'),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a total of R10 for ,'nightshift shift'" , function(){
        
        assert.equal("free",transportFee('nightshift'),"for night shift return free"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});
