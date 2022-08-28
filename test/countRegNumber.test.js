describe('Test countRegNumber function' , function(){
    it("It should return the number of reg cars" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the number of reg cars" , function(){
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
        // assert.deepEqual([2,2],[2,2]);
    });
});
