import assert from 'assert';
import isWeekday from '../isWeekday.js';

describe('Test for the isWeekday function' , function(){
    it("It should return if the day is a weekday and not a weekend " , function(){
        
        assert.equal(false,isWeekday("Saturday"),"this should be false"); 
        
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return if the day is a weekday and not a weekend" , function(){
        
        assert.equal(true,isWeekday("Monday"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
   

});