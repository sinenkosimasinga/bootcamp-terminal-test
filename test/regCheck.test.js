describe('Test regCheck function' , function(){
    it("It should return ,'true 'when reg1 endswith reg2" , function(){
        
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'false ' when reg1 does not endswith reg2" , function(){
        
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

        assert.equal(regCheck('5566 L', 'M'), false);

        assert.equal(regCheck('ERT 123 EC', 'GP'), false);

        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
        // assert.deepEqual([2,2],[2,2]);
    });
});