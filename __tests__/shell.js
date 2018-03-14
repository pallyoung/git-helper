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

it('shell execSync error',function(){
    expect(sh.execSync('hello world')).not.toBe(undefined);
});
it('shell execSync success',function(){
    expect(sh.execSync('git remote -v')).not.toBe(undefined);
});