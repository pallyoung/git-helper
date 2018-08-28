const sh = require('./shell');
const {
    split
} = require('./util');
function info() {
    const stdout = sh.execSync('git remote');
    return split(stdout, '\n');
}

function verbose() {
    const stdout = sh.execSync('git remote -v');
    return split(stdout, '\n');
}
function add(name, address, options) {
    sh.execSync(`git remote add ${options || ''} ${name} ${address}`);
}
function rename(oldname, newname) {
    sh.execSync('git remote rename ' + oldname + ' ' + newname);
}
function remove(name) {
    sh.execSync(`git remote remove ${name}`);
}
function setHead(name, options) {
    sh.execSync(`git remote set-head ${name} ${optionsq}`);
}
function setBranches(name, branchs, options = '') {
    sh.execSync(`git remote set-branches ${options} ${name} ${branchs.join(' ')}`);
}
function setUrl(name, url, options = '') {
    sh.execSync(`git remote set-url ${options} ${name} ${url}`);
}
function getUrl(name, options = '') {
    const stdout = sh.execSync(`git remote get-url ${options} ${name}`);
    return split(stdout, '\n');
}
function addUrl(name, url, options = '') {
    sh.execSync(`git remote set-url --add ${options} ${name} ${url}`);
}
function deleteUrl(name, url, options = '') {
    sh.execSync(`git remote set-url --delete ${options} ${name} ${url}`);
}
function prune() {

}
module.exports = {
    info,
    verbose,
    rename,
    add,
    remove,
    setHead,
    getUrl,
    setUrl,
    addUrl,
    deleteUrl,
    setBranches,
    prune
}