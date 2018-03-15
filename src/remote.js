var sh = require('./shell');

function remote() {
    var result = sh.execSync('git remote');
    if (!result.error) {
        return result.stdout;
    } else {
        throw new Error();
    }
}
function remoteVerbose() {
    var result = sh.execSync('git remote -v');
    if (!result.error) {
        var stdout = result.stdout.split('\n');
        var verbose = {

        }
        stdout.forEach(item => {
            try {
                var name = item.match(/([^\t]*?)\t/)[1];
                var url = item.match(/\t([^\s]*?)\s/)[1];
                var type = item.match(/\(([^\)]*?)\)/)[1];
                if (!verbose[name]) {
                    verbose[name] = {}
                }
                verbose[name][type] = url;
            } catch (e) {
                //ignore
            }

        });
        return verbose;
    } else {
        throw new Error();
    }
}
function remoteAdd() {

}
function remoteRename(oldname, newname) {
    var result = sh.execSync('git remote rename ' + oldname + ' ' + newname);
    if(result.error){
        throw new Error();
    }else if(result.stderr){
        throw new Error();
    }else{
        return true;
    }
}
function remoteRemove() {

}
function remoteSetHead() {

}
function remoteSetBranches() {

}
function remoteSetUrl() {

}
function remoteGetUrl() {

}
console.log(remoteRename('b','origin'))
module.exports = {
    remote,
    remoteVerbose
}