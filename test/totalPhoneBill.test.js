import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';

describe('Test for the totalPhonebill function' , function(){
    it("It should return a total of R7.45 for ,'call,sms,call,sms'" , function(){
        
        assert.equal("R7.45",totalPhoneBill("call, sms, call, sms, sms"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a total of R3.40 for ,'call, sms'" , function(){
        
        assert.equal("R3.40",totalPhoneBill("call, sms"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a total of R1.30 for ,'sms, sms'" , function(){
        
        assert.equal("R1.30",totalPhoneBill("sms, sms"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});