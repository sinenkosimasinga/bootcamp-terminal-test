import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';

describe('Test for countAllPaarl function' , function(){
    it("It should return a 3 for ,'CL''-fromStellies" , function(){
        
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123')); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a 1 for ,'CF''-Kuilsriver'" , function(){
        
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123')); 

        // assert.deepEqual([2,2],[2,2]);
    });
 

});