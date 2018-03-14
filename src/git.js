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
        var fetch = stdout[0];
        var push = stdout[1];
        return {
            fetch,
            push
        }
    } else {
        throw new Error();
    }
}
function remoteAdd() {

}
function remoteRename() {

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
console.log(remoteVerbose())
module.exports = {
    remote,
    remoteVerbose
}