var sh = require('./../src/shell');
it('shell exec error',function(){
    sh.exec('hello world').then(function(result){
        expect(result.error).toBe(undefined);
    },function(result){
        expect(result.error).not.toBe(undefined);
    });
})
it('shell exec success',function(){
    sh.exec('git remote -v').then(function(result){
        expect(result.error).toBe(undefined);
    },function(result){
        expect(result.error).not.toBe(undefined);
    });
})